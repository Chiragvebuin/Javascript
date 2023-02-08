const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req, res) => {
    res.send('Hello from my App');
});

app.listen(3000, () => {
    debug('Listening on port 3000');
});