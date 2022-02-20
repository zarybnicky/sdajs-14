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

// 12. Počítadlo: ve skriptu napojeném na HTML dokument
// 12.1. Vytvořte proměnnou counter a tlačítko s nápisem "+1" a ID counterAdd
// 12.2. Napojte tlačítko tak, že se po jeho stisknutí zvětší proměnná counter o 1.
// 12.3. Přidejte div s ID counterText.
//       Po stisknutí tlačítka a zvětšení proměnné counter vypište její hodnotu jako text do tohoto divu (textContent)

// 14. Object/dict + funkce
// 14.1. Vytvoř objekt databazeUzivatelu
//       { 1: { name: "Eva", surname: "Nová" }, 2: { name: "Jirka", surname: "Nový" } }
// 14.2. Vytvoř funkci najdiNejvetsiIdUzivatele()
// 14.2.1. Ziskat všechny klíče objektu jako seznam
// 14.2.2. Najít maximum z tohoto seznamu a vrátit ho.
// 14.3. Vytvoř funkci vytvorUzivatele(jmeno, prijmeni),
//       která přidá záznam do databazeUzivatelu s ID o jedna větším než najdiNejvetsiIdUzivatele()
//       a vrátí toto ID
// 14.4. Vytvoř funkci odstranUzivatele(id), která z databazeUzivatelu odstrani uzivatele s tímto ID


// 15. Bleskové úlohy
// 15.1. Definuj funkci se třemi argumenty, první číslo, druhý řetězec, třetí argument bude objekt, a zavolej ji.
function fceSeTremiParametry(a, b, c) {}
const fceSeTremiParametry2 = (a, b, c) => {}
fceSeTremiParametry(5, "a", {});

// 15.2. Definuj funkci bez argumentů, která vrací číslo 42. Zavolej ji, ulož výsledek do proměnné a vypiš tuto proměnnou.
const vraci42 = () => 42;

function vraci_42() {
    return 42;
}
const promenna = vraci42();
console.log(promenna);

// 15.3. Vytvoř objekt. Na dalším řádku do něj přidej další klíč a hodnotu, tento klíč pak z objektu smaž.
const objekt = {};
objekt.klic = "hodnota";
delete objekt.klic;

// 15.4. Vytvoř pole. Do pole programově přidej tři čísla, odeber pak poslední z nich.
pole = []
pole.push(1, 2, 3);
pole.pop()
console.log(pole);

// 15.5. Vytvoř pole nějakých čísel, jedním řádkem kódu z něj vyfiltruj sudá čísla, výsledek vypiš.
pole = [1, 11, 12, 98]
console.log(pole.filter(n => n % 2 === 1))

// 15.6. Vytvoř objekt s nějakými daty. Získej z něj (programově) všechny klíče a všechny hodnoty a vypiš je.
const obj = {
    "key": "hodnota",
    "cislo": 5,
    "objekt": {}
};
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 15.7. Vytvoř řetězec. Vytvoř další proměnnou, která bude obsahovat tento řetězec 2x za sebou ("+"!!!).
//       Vypiš jejich délku.
const retezec = "123"
const retezecX2 = retezec.repeat(2);
console.log(retezec.length);
console.log(retezecX2.length);

// 15.8. Definuj funkci plusJedna(n), která vrátí n + 1. Zavolej ji a vypiš výsledek.
function plusJedna(n) {
    return n + 1;
}
console.log(plusJedna(5));

// 15.9. Definuj funkci jeVetsiNezPet s jedním argumentem, která vrací, jestli je větší než pět. Zavolej ji a vypiš.
function jeVetsiNezPet(n) {
    return n > 5;

    // if (n > 5) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(jeVetsiNezPet(6))
console.log(jeVetsiNezPet(3))

// 15.10. Definuj funkci zvetsiPole s jedním argumentem, která do pole, které dostane, přidá [5, 6, 7]. (concat!!!)
function zvetsiPole(pole) {
    // return pole.concat([5, 6, 7]);
    return [...pole, 5, 6, 7];
}
console.log(zvetsiPole([0, 0, 0]));


// 16. Bleskové úlohy 2
// 16.1. Vytvoř číselnou proměnnou, vytvoř jinou proměnnou do které uložíte první proměnnou plus 5.
const cislo = 45
const cislo2 = cislo + 5;

// 16.2. Ulož řetězec do proměnné, přidej k němu na konec "!!!" ("+")
const retezec2 = "Hello";
console.log(retezec2 + "!!!");

// 16.3. Vytvoř objekt s jedním klíčem a hodnotou, vytáhni hodnotu u tohoto klíče a vypiš ji. 
//       Přidej do objektu další dvojici klíč/hodnota.
const obj2 = { vybaveni: "obrazovka" };
console.log(obj2.vybaveni);
obj2.zasuvka = "poloprazdna";

Object.values(obj2) === ["poloprazdna", "obrazovka"];

// 16.4. Vytvoř pole se třemi prvky, vyber z pole druhý prvek (index, []) a vypiš ho.
const pole2 = ["Já", "Ty", "On"];
//             0,    1,    2
console.log(pole2[1]);

// 16.5. Vytvoř funkci se třemi argumenty. Druhý argument bude číslo, které funkce vezme, přičte k němu 5 a vrátí ho.
//       Vypiš výsledek volání s argumenty ({}, 0, ""). Vypiš výsledek volání s argumenty ("1", "2", "3").
function triArgumenty(jedna, dva, tri) {
    return dva + 5;
}
console.log(triArgumenty({}, 0, ""));
console.log(triArgumenty("1", "2", "3"));
"2" + 5 === "25"

// 16.6. Vytvoř třídu Person, jejíž konstruktor bude mít jeden argument `name`. Vytvoř instanci této třídy a vypiš ji.
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
const person2 = new Person2("Name");
console.log(person2);


// Bleskové úlohy 3
// 17.1. Vytvoř pole o pěti prvcích, vypiš z něj pátý.
const pole3 = [1, 2, 3, 4, 5];
console.log(pole3[4]);

// 17.2. Vytvoř řetězec o alespoň 5 znacích, vypiš z něj první znak.
const retezec3 = "123456";
console.log(retezec3[0]);

// 17.3. Vytvoř objekt uživatele s dvěmi klíči (name, surname). Vypiš celé jméno uživatele.
const object = { surname: "B", name: "A" };
// console.log(Object.values(object));
// console.log(Object.values(object).join(" "));
// console.log([1, 2, 3].join(", "));
console.log(object.name + " " + object.surname);

// 17.4. Definuj funkci se třemi argumenty (třemi objekty), vypiš v ní třetí argument. Zavolej ji.
function triArgumenty2(a, b, c) {
    console.log(c);
}
triArgumenty2({ a: "" }, { b: "" }, { c: "" });

// 17.5. Vytvoř funkci o jednom argumentu (řetězci), která vrátí tento řetězec dvakrát. Zavolej ji.
function dvakrat(retezec) {
    return retezec + retezec;
}
console.log(dvakrat("ABC"));

// 17.6. Vytvoř funkci o jednom argumentu (objektu), která vrátí všechny klíče tohoto objektu. Zavolej ji.
function kliceObjektu(objekt) {
    return Object.keys(objekt);
}
const obj3 = { a: "", b: "", c: "" };
console.log(kliceObjektu(obj3));

// 17.7. Definuj funkci bez argumentů, která vrátí libovolný objekt.
//       Zavolej ji, ulož výsledek do proměnné a vypiš hodnotu libovolného klíče.
function bezArgumentu() {
    return { a: "b", c: "d" }
}
vysledek = bezArgumentu();
console.log(vysledek.a);

// 17.8. Vytvoř pole nějakých čísel, jedním řádkem kódu z něj vyfiltruj lichá čísla, výsledek vypiš.
const poleCisel = [1, 11, 12, 98]
console.log(poleCisel.filter(n => n % 2 === 0));





// 18.0. Vytvoř funkci o jednom argumentu, která vrací pole, které bude argument obsahovat dvakrát ([x, x]), zavolej ji.
function dvakratDoPole(x) {
    return [x, x];
}
console.log(dvakratDoPole([1, 2, 3]));

// 18.1. Vytvoř funkci bez argumentů, která vrátí funkci jinou, vnořenou, která vypíše "5".
//       ( = v tělě funkce vytvoř funkci a vrať ji).
//       Zavolej ji, ulož si výsledek a zavolej tento výsledek.
function vnorenaFunkce() {
    function vypisPet() {
        console.log("z vnorene funkce");
    }
    return vypisPet;

    // return () => { console.log("vnorena") };
}
vysledek = vnorenaFunkce();
vysledek();
console.log(vysledek);

// 18.2. Vytvoř funkci s jedním argumentem. Typ argumentu bude funkce, kterou v těle zavolej.
//       Zavolej vytvořenou funkci s libovolnou funkcí.
function dostanuFunkci(funkce) {
    console.log("před voláním");
    funkce();
    console.log("po volání");
}
dostanuFunkci(() => {
    console.log("predavana funkce");
})

// 20. Bonus: Login form with AJAX = fetch()
// 20.1. Vytvořte dva <input>y (name="login", name="password") a jeden <button>
// 20.2. Po kliknutí na tlačítko, vypiš do konzole hodnoty <input>ů
// 20.3. Odeslat hodnoty formuláře na endpoint /login jako JSON = fetch()
// 20.4. Pokud přijde {status:"error"}, zobrazit formulář červeně, 
//       pokud bude {status:"ok"}, tak ho schovat