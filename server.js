import express from 'express';
const app = express();

app.use(express.static('public/'));
// =>
// app.get('/index.html', ...)
// app.get('/app.js', ...)

let table = [
    { id: 1, name: "Alex", surname: "Jones" },
    { id: 2, name: "Alex", surname: "Jones" },
    { id: 3, name: "Alex", surname: "Jones" },
    { id: 4, name: "Alex", surname: "Jones" },
    { id: 5, name: "Alex", surname: "Jones" },
    { id: 6, name: "Alex", surname: "Jones" },
    { id: 7, name: "Alex", surname: "Jones" },
    { id: 8, name: "Alex", surname: "Jones" },
];
app.get("/table", (request, response) => {
    response.send(JSON.stringify(table));
})


app.get('/hi', function respondHi(request, response) {
    response.send('<html><body><div style="background:blue">Hi, World (GET)!</div></body></html>');
});

app.post('/hi', function respondHi(request, response) {
    response.send('<html><body><div style="background:blue">Hi, World (POST)!</div></body></html>');
});

let counter = 0;

// let responseObject = { number: 5} ;
// let responseJSON   ='{"number":5}';

app.get('/query', (request, response) => {
    console.log(counter);
    response.send(JSON.stringify({ number: counter }));
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