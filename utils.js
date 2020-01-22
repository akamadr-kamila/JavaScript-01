const fs = require("fs");
const path = require("path");

const findInDir = (arg) => {
  if(arg.indexOf('-') === -1){
    console.trace('Nie ma myślnika w nazwie pliku')
    return;
  }
  const dirChunks = arg.split('-');
  const files = fs.readdirSync(path.resolve(__dirname));

  const foundedFile = files.find(a => a.includes(dirChunks[0]));
  const filesDeep1 = fs.readdirSync(path.resolve(__dirname, foundedFile));

  const foundedFileDeep1 = filesDeep1.find(a => a.includes(dirChunks[1]));

  return path.resolve(__dirname, foundedFile, foundedFileDeep1 );
}

module.exports.findInDir = findInDir;