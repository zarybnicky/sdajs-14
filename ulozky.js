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
// console.log(poleNkratM(3, 5));


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
// kalkulacka("+", 5, 10) === 15
// kalkulacka("-", 5, 10) === -5
// kalkulacka("*", 5, 10) === 50
// kalkulacka("/", 5, 10) === .5
function kalkulacka(operace, a, b) { // sign, operation
    if (operace == "+") {
        return secist(a, b)
    }
    if (operace == "-") {
        return odecist(a, b)
    }
    if (operace == "*") {
        return nasobit(a, b)
    }
    if (operace == "/") {
        return delit(a, b)
    }
    return NaN; // Not a Number  == tohle cislo neni cislo
}

// 8. Seznamy objektů
// const obj = { key1: "a", key2: "b", key3: "c" };
// console.log(Object.values(obj));

// 8.1. Máme-li seznam objektů, jak z nich vytáhnout hodnoty z klíče key
// a vytvořit seznam hodnot?
const objs = [{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }];
pole = objs.map(x => x.key);

pole = [];
objs.forEach(x => {
    pole.push(x.key);
})

// 8.1.1.
const numberObjs = [
    { left: 5, right: 10 },
    { left: 0, right: 0 },
    { left: 8, right: 3 },
];
// 8.1.1.1. Vytáhnout všechny hodnoty pod klíčem `left` => do pole [5, 0, 8]
pole = numberObjs.map(x => x.left);
pole = numberObjs.map(x => {
    return x.left;
});

pole = [];
numberObjs.forEach(x => {
    pole.push(x.left);
});

// 8.1.1.2. Vytáhnout všechny hodnoty pod klíčem `right` => [10, 0, 3]
// 8.1.1.3. Sečíst `left` a `right` => [15, 0, 11]
pole = numberObjs.map(x => x.left + x.right);
pole = numberObjs.map(x => {
    return x.left + x.right;
});

pole = [];
numberObjs.forEach(x => {
    pole.push(x.left + x.right);
});

// 8.2. Máme-li seznam uživatelů, jak z něj vytvořit seznam měst?
const uzivatele = [
    { name: "Adam", address: { city: "Brno" } },
    { name: "Eva", address: { city: "Olomouc" } },
];
pole = uzivatele.map(x => x.address.city);

pole = [];
uzivatele.forEach(x => {
    pole.push(x.address.city);
});

// 8.3. Máme-li objekt uživatelů, kde každý uživatel je označený svým ID,
const uzivObj = {
    1: { name: "Adam", surname: "Ondra" },
    2: { name: "Eva", surname: "Brzobohatá" },
};

// 8.3.1 Jak z objektu vytvořit seznam křestních jmen? => ["Adam", "Eva"]
pole = Object.values(uzivObj).map(x => x.name)
    // 8.3.2 Jak z objektu vytvořit seznam přijmení? => ["Ondra", "Brzobohatá"]
pole = Object.values(uzivObj).map(x => x.surname)
    // 8.3.3 Jak z objektu vytvořit seznam celých jmen?
    //        => ["Adam Ondra", "Eva Brzobohatá"]
pole = Object.values(uzivObj).map(x => x.name + " " + x.surname)

// 9. Funkce, listy, objekty
//   {name: "A", surname: "B"} => "A B"
// 9.1 Vytvořte funkci, která z objektu uživatele vrátí jeho celé jméno
let uzivatel = { name: "A", surname: "B" }

function vratMeno(objekt) {
    return objekt["name"] + " " + objekt["surname"]
}
// console.log(vratMeno(uzivatel));

// 9.2 Vytvořte funkci, která ze seznamu uživatelů vrátí jejich celá jména
let poleUzivatelu = [
    { name: "A", surname: "B" },
    { name: "C", surname: "D" }
]

function vratMenoZPola(pole) {
    return pole.map(x => x.name + " " + x.surname)
}
// console.log(vratMenoZPola(poleUzivatelu));

// 9.3 Vytvořte funkci, která z objektu id:uživatel vrátí celá jména
let uzivateleObj = {
    1: { name: "Adam", surname: "Ondra" },
    2: { name: "Eva", surname: "Brzobohatá" },
};

function celaJmenaZUzivatelu(objekty) {
    return Object.values(objekty).map(x => x.name + " " + x.surname)
}
let vysledek = celaJmenaZUzivatelu(uzivateleObj);

// 9.4 Bonus: Vytvořte funkci, která z objektu id:uživatel vrátí objekt id:"celé jméno"
uzivateleObj = {
    1: { name: "Adam", surname: "Ondra" },
    2: { name: "Eva", surname: "Brzobohatá" },
};
vysledek = {
    1: "Adam Ondra",
    2: "Eva Brzobohatá",
};

function getIdsWithNames(objekty) {
    const result = {};

    Object.keys(objekty).forEach(key => {
        const value = objekty[key]; // { name: "Eva", surname: "Brzobohatá" },
        result[key] = value.name + " " + value.surname;
    })

    return result;
}

// console.log(uzivateleObj)
// console.log(getIdsWithNames(uzivateleObj))


// 9.5. Destructuring objects
const user = {
    name: "Jmeno",
    surname: "Prijmeni",
};
const { name: jmeno, surname } = user;
console.log(jmeno);

const sayHello = ({ name }) => "Hello, " + name;
console.log(sayHello({ name: "..." }));


// 10. OOP
// 10.1. Vytvořte funkci hello(name), která dostane jméno a vrátí řetězec "Hello, [name]!"

// 10.2. Vytvořte třídu Person, která v konstruktoru dostane `name` a tu si uloží do this.name

// 10.3. Do třídy Person přidejte metodu "greet()", která vrátí řetězec "Hello, [name]!",
//       přičemž `name` bude jméno osoby, které dostala v konstruktoru


// 11. Dveře, otevřené/zavřené, barva ("řetězec")
// 11.1. Vytvořte třídu Dvere, která v konstruktoru dostane `barva`, `otevrene` (boolean, stav dveří)
// 11.2. Pridejte metodu otevri(), která nastaví `otevrene`
// 11.3. Pridejte metodu zavri(), která nastaví `otevrene` na false
// 11.4. Pridejte getter popis(), který popiše dveře, jejich barvu a stav