// 1. Prohodit hodnoty dvou proměnných
// 1.1. Dvě proměnné a=5, b=10
let a = 5;
let b = 10;
// 1.2. Prohodit jejich hodnoty
let tmp = a; // 5, tmp = temporary, dočasná
a = b; // 10
b = tmp; // 5
// 1.3. Vypsat obě proměnné
// console.log(a, b);

// 2. Součet
// 2.1. Dvě proměnné a, b
a = 5;
b = 10;
// 2.2. Proměnná c = součet "a" a "b"
let c = a + b;
// 2.3. Nová funkce secist(a, b) vrací součet
function secist(a, b) {
    return a + b;
}
// 2.4. Vypsat secist(5, 10)  (v terminálu 15)
// console.log(secist(5, 10))

// 3. Konkatenace polí
// 3.1. Dvě pole a, b
a = [1, 2];
b = [5, 6];
// 3.2. Do proměnné c nové pole a, za něj b
//      (a=[1, 2], b=[5, 6], c=[1, 2, 5, 6])
//      a.concat(b)
c = a.concat(b);
// 3.3. Nová funkce spojitPole(a, b) vrací konkatenované pole
const spojitPole = (a, b) => {
    return a.concat(b);
};
// 3.4. Vypsat spojitPole([1, 2], [5, 6])
// console.log(spojitPole(a, b));


// 4. N-krát vypiš M
// 4.1. Dvě čísla m, n
let m = 5;
let n = 3;
// 4.2. n-krát vypsat "m"
// for (let i = 0; i < n; i++) {
//     console.log(m);
// }
// 4.3. funkce nkratVypisM(m, n)
function nkratVypisM(m, n) {
    for (let i = 0; i < n; i++) {
        console.log(m);
    }
}
// 4.4. Ověřit, že nkratVypisM(5, 3)
//     5
//     5
//     5
// nkratVypisM(5, 3);


// 5. Vytvoř pole, kde je N-krát M
// 5.1. Dvě proměnné m, n
m = 5;
n = 3;
// 5.2. Vytvoř pole "pole", kde je N-krát M
//   m=5, n=3,  pole=[5, 5, 5]
let pole = [];
for (let i = 0; i < n; i++) {
    pole.push(m);
}
// console.log(pole);
// 5.3. Vytvoř funkci poleNkratM(m, n), která bude vracet toto pole
function poleNkratM(m, n) {
    let pole = [];
    for (let i = 0; i < n; i++) {
        pole.push(m);
    }
    return pole;
}
// 5.4. Ověř funkčnost výpisem na konzoli
console.log(poleNkratM(3, 5));


// 6. Doplnit funkce odecist(a, b), nasobit(a, b), delit(a, b)
function odecist(a, b) {
    return a - b;
}

function nasobit(a, b) {
    return a * b;
}

function delit(a, b) {
    return a / b;
}

// 7. Mini-kalkulačka
// 7.1. Proměnná a, b, operace
a = 5
b = 10
const operace = "+"; // "-", "*", "/"

// 7.2.1. Pokud operace == "+", zavole secist()
// 7.2.2. Pokud operace == "-", zavole odecist()
// 7.2.3. Pokud operace == "/", zavole nasobit()
// 7.2.4. Pokud operace == "*", zavole delit()

// 7.3. Vytvořit funkci kalkulacka(operace, a, b)
kalkulacka("+", 5, 10) === 15
kalkulacka("-", 5, 10) === -5
kalkulacka("*", 5, 10) === 50
kalkulacka("/", 5, 10) === .5




