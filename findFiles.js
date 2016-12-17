// Challenge #6

var fs = require('fs')
var path = require('path')
var files = undefined

function findFiles(dirname, fileType, callback) {
  fs.readdir(dirname, function findFileType(err, list) {
    fileType = `.${fileType}`
    if (err) return callback(err)
    files = list.filter(function (element) {
      return path.extname(element) === fileType
    })
    callback(null, files)
  })
}

module.exports = findFiles
