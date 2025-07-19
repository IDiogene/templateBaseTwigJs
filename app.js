const express = require('express');
const app = express();
const port = 3000;
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const Twig = require('twig');

// (optionnel : config Twig)
app.set('twig options', {
  allowAsync: true,
  strict_variables: false
});


// 1. Crée un serveur livereload qui surveille le dossier views (templates) et public (css/js)
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/views");
liveReloadServer.watch(__dirname + "/public");

// 2. Middleware pour injecter le script livereload dans tes pages HTML générées
app.use(connectLivereload());


// Setup : moteur twig
app.set('view engine', 'twig');
app.set('views', __dirname + '/views');

// Fichiers statiques
app.use(express.static(__dirname + '/public'));

const indexRouter = require('./route/index');

app.use('/', indexRouter);


app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
});



