
var connect = require('connect')
  , sass = require('node-sass');

var server = connect.createServer(
  sass.middleware({
      src: __dirname
    , dest: __dirname + '/public'
    , debug: true
  }),
  connect.static(__dirname + '/public')
);

server.listen(3000);
console.log('Server listening on port 3000');