
const PDFMerger = require('pdf-merger-js');

const argv = process.argv

let output = 'merged.pdf';

const isPDF = (arg) => arg.endsWith(".pdf")
const isPageFlag = (arg) => arg === "-p" || arg === "--page"
const isOutput = (arg) => arg === "-o" || arg === "--out"

const allPdfList = [];

for (i = 0; i < argv.length; i++) {
	if (isOutput(argv[i]) && argv[i + 1] && isPDF(argv[i + 1])) {
		output = argv[i + 1];
		++i;
		continue;
	}
	if (isPDF(argv[i])) {
		allPdfList.push({ pdf: argv[i] });
		continue;
	}
	if (isPageFlag(argv[i]) && argv[i + 1] && !isPDF(argv[i + 1])) {
		let pages = argv[i + 1];
		if (!pages.includes("-") && !pages.includes(",") && !pages.includes("to")) {
			pages = [pages];
		}
		allPdfList[allPdfList.length - 1].page = pages;
	}
}
if (allPdfList.length <= 0) {
	console.log("PDF file is required!");
	process.exit(0);
}
const merger = new PDFMerger();
(async () => {

	allPdfList.map(file => merger.add(file.pdf, file.page || null))

	await merger.save(output);
	console.log("Merge complete and save " + output)
})();