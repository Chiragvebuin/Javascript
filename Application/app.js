import express from 'express';
import chalk from 'chalk';
const app = express();


app.get('/',(req, res) => {
    res.send('Hello from my App');
});

app.listen(3000, () => {
    console.log('Listening on port 3000' + chalk.italic.yellowBright(' --INITALIZING'));
});