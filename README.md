# Description

This node JS liblary is simple pdf merge app. This is use the [pdf-merger-js](https://www.npmjs.com/package/pdf-merger-js) liblary and it provides command line interface from the original pdf merge liblary.

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
|   Pages   |   --page  |   -p  |    null ( all page )   | This parameter controls which pages are merged per evey document. Must be specified separately after 

## Pages correct varaiations
| Input | Description |
|:-:|:-:|
| 3 | merge only page 3 |
| 2, 5  | merge the pages 1 and 3 |
| 4 to 10 | merge pages 4 to 10  |
| 3-4 | merge pages 3 to 4  |

```
pdfmerge-cli first.pdf -p 1-3 sec.pdf 10,15,20 other.pdf
```

The result contained the frist.pdf 1 to 3 and sec.pdf 10 and 15 and 20 and the full other.pdf in this order.

# More examples

Custom output filename
```
pdfmerge-cli first.pdf sec.pdf other.pdf -o mymerge.pdf
```

