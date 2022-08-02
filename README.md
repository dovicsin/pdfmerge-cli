# Description

This node JS library is a simple pdf merge app. It uses the [pdf-merger-js](https://www.npmjs.com/package/pdf-merger-js) library and it provides command line interface from the original pdf merge library.

# Installation
```
npm install -g pdfmerge-cli 
```

# Usage
```
pdfmerge-cli first.pdf sec.pdf other.pdf
```

# Flags

|   Name    |   Flag    |   Short   |   Default |   Description |
|:---------:|:---------:|:---------:|:-------------:|:-------------:|
|   Output file  |   --out   |   -o      |   merged.pdf   | Output file name with extension. |
|   Pages   |   --page  |   -p  |    null ( all page )   | This parameter controls which page(s) to be merged from every document. Must be specified separately after

## Correct Pages examples
| Input | Description |
|:-:|:-:|
| 3 | merge only page 3 |
| 2, 5  | merge the pages 1 and 3 |
| 4 to 10 | merge pages 4 to 10  |
| 3-4 | merge pages 3 to 4  |

```
pdfmerge-cli first.pdf -p 1-3 sec.pdf 10,15,20 other.pdf
```

The result contains the frist.pdf 1 to 3 and sec.pdf 10 and 15 and 20 and the full other.pdf respectively.

# More examples

Custom output filename
```
pdfmerge-cli first.pdf sec.pdf other.pdf -o mymerge.pdf
```

