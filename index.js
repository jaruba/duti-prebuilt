var path = require('path')
var fs = require('fs')
var child = require('child_process')

var back = '../..';
var binDir = path.resolve(__dirname, back, 'bin');

// in case of asar, go one level down
while (binDir.includes('/app.asar/') || binDir.includes('\\app.asar\\')) {
    back += '/..'
    binDir = path.resolve(__dirname, back, 'bin');
}

// for safety
if (!fs.existsSync(binDir)) {
  back += '/..'
  binDir = path.resolve(__dirname, back, 'bin');
}

var duti = path.join(binDir, 'duti')

if (fs.existsSync(path.join(duti, 'duti')))
  duti = path.join(duti, 'duti')

module.exports = function(id, ext) {
  child.exec('"' + duti + '" -s ' + id + ' ' + ext + ' viewer');
}
