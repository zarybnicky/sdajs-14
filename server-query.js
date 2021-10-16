import fetch from 'node-fetch';

fetch('http://localhost:3000/query').then((response) => {
    return response.json();
}).then((obj) => {
    console.log('Counter:', obj.number);
});
