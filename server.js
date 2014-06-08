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

var port = process.env.PORT || 5000;
server.listen(port);
console.log('Server listening on port ' + port);
