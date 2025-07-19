const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Accueil',
    message: 'hello world !!!'
  });
});

router.get('/about', (req, res) => {
  res.render('about'), {

  }
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router;
