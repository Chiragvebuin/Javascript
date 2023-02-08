import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
import morgan from 'morgan';
import path from 'path';

const app = express();
const debug = Debug("app");

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req, res) => {
    res.send('Hello from my App');
});

app.listen(3000, () => {
    debug('Listening on port 3000' + chalk.italic.yellowBright(' --INITALIZING'));
});