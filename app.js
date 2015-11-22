
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('public', __dirname + '/public');
  app.use("/stylesheets", express.static(__dirname + "/public/stylesheets"));
  app.use("/images", express.static(__dirname + "/public/images"));
  app.use("/app", express.static(__dirname + "/public/app"));
  app.use("/libs", express.static(__dirname + "/bower_components"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.all('/*', function ( req, res ) {
  res.status( 200 )
      .sendfile('index.html', {root: app.settings.public});
})

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
