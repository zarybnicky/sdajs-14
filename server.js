const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hi', (request, response) => {
    response.send('Hi, World!');
});

let counter = 0;

app.get('/query', (request, response) => {
    console.log(counter);
    response.send(`${counter}`);
});

app.get('/plus', (request, response) => {
    counter++;
    setTimeout(() => {
        console.log(counter);
        response.send(`${counter}`);
    }, 500);
});

app.get('/minus', (request, response) => {
    counter--;
    console.log(counter);
    response.send(`${counter}`);
});

app.listen(3000, () => {
  console.log('App listening at http://127.0.0.1:3000');
  console.log('App listening at http://localhost:3000');
});
