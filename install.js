var request = require('request')
var fs = require('fs')
var path = require('path');

var user = 'jaruba'
var tag = '0.0.1'
var repoName = 'duti-prebuilt'
var pkg = 'duti'
var url = 'https://github.com/' + user + '/' + repoName + '/releases/download/' + tag + '/' + pkg
var binDir = path.resolve(__dirname, '../..', 'bin');

if (!fs.existsSync(binDir))
  fs.mkdirSync(binDir);

request
  .get(url)
  .on('error', function (err) {
    throw err
  })
  .pipe(fs.createWriteStream(pkg))
  .on('close', function () {
    fs.rename(pkg, path.join(binDir, 'duti'));
  })
