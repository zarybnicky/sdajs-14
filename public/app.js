const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterText = document.getElementById('counter');
const postListDiv = document.getElementById('post-list');

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

minusButton.addEventListener('click', function() {
    fetch('/minus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

plusButton.addEventListener('click', function() {
    fetch('/plus').then((response) => {
        return response.text();
    }).then((text) => {
        counterText.innerText = text;
    });
});

// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//     return response.json();
// }).then((posts) => {
//     posts.forEach((post) => {
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');
//         postDiv.innerText = `${post.id}: ${post.title}`;
//         postListDiv.appendChild(postDiv);
//     });
// });

// <table>
//   <tr>
//     <th> (table header)  ID
//     <th> (table header)  Name
//     <th> (table header)  Surname
//   <tr> (table row)
//     <td> (table cell)  id
//     <td> (table cell)  name
//     <td> (table cell)  surname
//   <tr> (table row)
//     <td> (table cell)  id
//     <td> (table cell)  name
//     <td> (table cell)  surname

// React

fetch('/table').then(res => res.json()).then((list) => {
    let table = document.createElement('table')
    table.className = "users-table"
    document.querySelector('#table').appendChild(table)

    let tr = document.createElement('tr')
    table.appendChild(tr)
    let thId = document.createElement('th')
    let thName = document.createElement('th')
    let thSurname = document.createElement('th')
    thId.innerText = "ID"
    thName.innerText = "Name"
    thSurname.innerText = "Surname"
    tr.appendChild(thId)
    tr.appendChild(thName)
    tr.appendChild(thSurname)

    list.forEach(row => {
        let tr = document.createElement('tr')
        table.appendChild(tr)

        let tdId = document.createElement('td')
        let tdName = document.createElement('td')
        let tdSurname = document.createElement('td')
        tdId.innerText = row.id
        tdName.innerText = row.name
        tdSurname.innerText = row.surname
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdSurname)
    });
});



const searchBar = document.querySelector("input[name=\"search\"]");
const searchBtn = document.querySelector("#searchBtn");
const searchResults = document.querySelector("#searchResults");

searchBtn.addEventListener("click", (event) => {
    console.log(searchBar.value);

    fetch("/search", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            search: searchBar.value
        }),
    }).then((response) => {
        return response.json()
    }).then((data) => {
        searchResults.textContent = JSON.stringify(data);
    });
});