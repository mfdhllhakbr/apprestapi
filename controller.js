'user strict';

var response = require('./res');
var connection = require('./koneksi');

//menambahkan res
exports.index = function(req, res){
    response.ok("Aplikasi RestAPI ku berjalan!", res)
};