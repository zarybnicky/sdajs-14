const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterText = document.getElementById('counter');

fetch('/query').then((response) => {
    return response.text();
}).then((text) => {
    counterText.innerText = text;
});

plusButton.addEventListener('click', function () {
    fetch('/plus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

minusButton.addEventListener('click', function () {
    fetch('/minus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});
