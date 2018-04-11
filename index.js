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

var duti = fs.existsSync(path.join(binDir, 'utid')) ? path.join(binDir, 'utid') : path.join(binDir, 'duti')

if (fs.existsSync(path.join(duti, 'utid')))
  duti = path.join(duti, 'utid')

module.exports = function(id, ext, type) {
  child.exec('"' + duti + '" -s ' + id + ' ' + ext + (type ? ' ' + type : ''));
}
