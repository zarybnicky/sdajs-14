const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterText = document.getElementById('counter');

fetch('/query').then((response) => {
    return response.text();
}).then((text) => {
    counterText.innerText = text;
});

plusButton.addEventListener('click', function () {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        counterText.innerText = this.responseText;
    });
    request.open('GET', '/plus');
    request.send();
});

minusButton.addEventListener('click', function () {
    fetch('/minus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});
