//yucky js compile time script
const fs = require("fs");
const path = require("path");

const folderPath = './public/md'
const outputPath = './public/md/index.json'

const files = fs.readdirSync(folderPath)
const fileArray = files.map((file) => path.join('/md/', file))
    .map(path => path.replaceAll('\\', '/'))
    .filter(path => path !== '/md/index.json');
const fileContent = JSON.stringify(fileArray);
fs.writeFileSync(outputPath, fileContent);