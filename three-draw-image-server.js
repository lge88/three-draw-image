
var express = require( 'express' );

var app = express();

app
  .use( express.static( __dirname ) )
  .use( express.directory( __dirname ) );

app.listen( 3000 );
