var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/styles';

var server = connect.createServer(
    sassMiddleware({
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
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);
