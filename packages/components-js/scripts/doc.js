const fs = require('fs');
const path = require('path');

function getFilesInDirectory(dir, suffix, files=[]) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      let subpath = dir.replace(/\/$/, '') + '/' + file;

      if (fs.statSync(subpath).isDirectory()) {
        getFilesInDirectory(subpath, suffix, files);
      } else if (subpath.endsWith(suffix)) {
        files.push(subpath);
      }
    });
  }

  return files;
}

function updateDependencyPaths(data) {
  return data.replace(/\([.\/]*(.*?)\)/g, '(#/components/$1)');
}

function removeGraph(data) {
  return data.replace(/### Graph\s+```.*```/gs, '');
}

function removeGenerator(data) {
  return data.replace(/----------------------------------------------\s+\*Built with.*/g, '');
}

function removeWhitespace(data) {
  return data.replace(/^\s+|\s+$/g, '');
}

for (const file of getFilesInDirectory('./src/components/', 'readme.md')) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(file, removeWhitespace(removeGenerator(removeGraph(data))), 'utf8', (err) => {
      if (err) throw err;
    });
    const dir = path.dirname(file);
    const basename = dir.split('/')[dir.split('/').length-1];
    fs.writeFile(`${dir}/${basename}.props.md`, removeWhitespace(removeGenerator(removeGraph(updateDependencyPaths(data)))), 'utf8', (err) => {
      if (err) throw err;
    });
  });
}
