var connect = require('connect');
var sass = require('node-sass');
var path = require('path');

var srcPath = path.join(__dirname, '/sass');
var destPath = path.join(__dirname, '/public/styles');

console.log(srcPath);
console.log(destPath);

var server = connect.createServer(
    sass.middleware({
        src: srcPath,
        dest: destPath,
        debug: true,
        outputStyle: 'expanded',
        prefix: '/styles'
    }),
    connect.static(__dirname + '/public')
);

var port = process.env.PORT || 5000;
server.listen(port);
console.log('Server listening on port ' + port);
