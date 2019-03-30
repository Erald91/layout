const express = require('express');
const cors = require('cors');
const app = express();

// https://expressjs.com/en/guide/routing.html
const PORT = 3001;

const data = [
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

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, resp) {
  resp.send('hello world');
});

app.get('/film-list', function(req, resp) {
  resp.json(data);
});

// app.post();
// app.put();
// app.delete();

app.listen(PORT, () => console.log('Server running in port ' + PORT));
