import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
import morgan from 'morgan';

import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const debug = Debug("app");

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req, res) => {
    res.send('Hello from my App');
});

app.listen(2000, () => {
    debug('Listening on port 2000' + chalk.italic.yellowBright(' --INITALIZING from Folder ***BACKUP'));
});