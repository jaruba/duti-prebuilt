var path = require('path')
var fs = require('fs')
var child = require('child_process')

var binDir = path.resolve(__dirname, '../..', 'bin');

// in case of asar, go one level down
if (!fs.existsSync(binDir))
  var binDir = path.resolve(__dirname, '../../..', 'bin');

var duti = path.join(binDir, 'duti')

if (fs.existsSync(path.join(duti, 'duti')))
  duti = path.join(duti, 'duti')

module.exports = function(id, ext) {
  child.exec('"' + duti + '" -s ' + id + ' ' + ext + ' viewer');
}
