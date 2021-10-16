const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterText = document.getElementById('counter');

fetch('/query').then((response) => {
    return response.json();
}).then((obj) => {
    counterText.innerText = obj.number;
});

// Equivalent
/* fetch('/query').then((response) => {
 *     return response.text();
 * }).then((text) => {
 *     const json = JSON.parse(text);
 *     counterText.innerText = json.number;
 * }); */

minusButton.addEventListener('click', function () {
    fetch('/minus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

plusButton.addEventListener('click', function () {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        counterText.innerText = this.responseText;
    });
    request.open('GET', '/plus');
    request.send();
});
