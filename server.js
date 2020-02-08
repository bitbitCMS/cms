require('module-alias/register');
var express = require('express');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const routes = require('./routes');
// var config = require('./config.js');

var _ = require('lodash');

/// MAIN APPLICATION

// var accessLoggerConfig = _.extend({excludes: '*'}, config.logging);

app.prepare().then(() => {
    const server = express();

    // server.use(cors(config.cors));
    server.use(bodyParser.json({strict: false}));
    server.use (function (err, req, res, next){
      if(err.statusCode == 400) {
        // fix invalid json format
        let body = err.body;
        let json = JSON.parse(err.body.slice(1, -1))
        req.body = json;
      }
      next();
    });
    
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser());
    
    // // next.js
    // server.get('/admin/article/:id', (req, res) => {
    //   app.render(req, res, '/admin/articledetail', req.params)
    // })
    // server.get('/admin/article/:id/update', (req, res) => {
    //   app.render(req, res, '/admin/articleupdate', req.params)
    // })
    routes(server)
    server.get('*', (req, res) => handle(req, res));

    // start server
    var port = process.env.PORT || 3000;
    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:' + port)
    })
})


