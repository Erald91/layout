const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {checkFields} = require('./utils/util');
const app = express();

// https://expressjs.com/en/guide/routing.html
const PORT = 3001;

app.locals.data = [
  {
    id: 'T1506908900',
    name: 'Ariel',
    release: '1999',
    type: 'Feature',
    provider: 'Disney',
  }, {
    id: 'T1508584395',
    name: 'Another',
    release: '1994',
    type: 'Series',
    provider: 'ACME'
  }, {
    id: 'T1506908901',
    name: 'ASDF',
    release: '1999',
    type: 'Feature',
    provider: 'TV'
  }
];

app.use(cors());
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, resp) {
  resp.send('hello world');
});

app.get('/film-list', function(req, resp) {
  resp.status(200).json(app.locals.data);
});

app.post('/film-list', function(req, resp) {
  const filmData = req.body;
  const missingFileds = checkFields(filmData);
  
  if (missingFileds.length) {
    resp.status(400).json({success: false, msg: `Missing or empty fields: ${missingFileds.join(', ')}`});
  } else {
    app.locals.data.push(filmData);
    resp.status(201).json({success: true});
  }
});

app.put('/film-list', function(req, resp) {
  const filmData = req.body;
  const missingFileds = checkFields(filmData);
  
  if (missingFileds.length) {
    resp.status(400).json({success: false, msg: `Missing or empty fields: ${missingFileds.join(', ')}`});
  } else {
    app.locals.data = app.locals.data.map(function(film) {
      if (film.id === filmData.id) {
        film = filmData;
      }
      return film;
    });
    resp.status(201).json({success: true});
  }
});

app.delete('/film-list/:filmId', function(req, resp) {
  const filmId = req.params.filmId;
  if (!filmId) {
    resp.status(400).json({success: false, msg: 'Missing filmId param'});
  } else {
    app.locals.data = app.locals.data.filter(function(film) {
      if (film.id !== filmId) {
        return true;
      } else {
        return false;
      }
    });
    resp.status(200).json({success: true});
  }
});

app.listen(PORT, () => console.log('Server running in port ' + PORT));
