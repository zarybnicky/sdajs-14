# sdajs-14

## Instrukce

[![asciicast](https://asciinema.org/a/442819.svg)](https://asciinema.org/a/442819)

Pro zprovoznění stačí čtyři kroky: v Git Bash 

1. `git clone https://github.com/zarybnicky/sdajs-14`
2. `cd sdajs-14`
3. `npm install`
4. `node server.js`

Pro zastavení serveru je potřeba použít klávesovou zkratku *Ctrl+C*. Aby se projevily změny v kódu serveru (`server.js`), je potřeba je restartovat: pomocí Ctrl+C zastavit a pak znovu spustit (v terminálu např. šipka nahoru a enter)

Node.js je alternativní implementace JavaScriptového enginu - příkazem `node` na příkazovém řádku je možné spustit interaktivní prostředí podobné "Konzoli" v prohlížeči, kde je možné spouštět libovolné příkazy JavaScriptu. Ukončení tohoto prostředí je možné pomocí Ctrl+D, nebo příkazu `.exit`.

Server, jehož zdrojový kód je v souboru `server.js`, je ukázkový server v jazyce JavaScript, který je implementován pomocí knihovny Express (v kódu `import express from 'express';`). Pro naše účely se jedná o alternativu k serveru Apache, který jste používali v dřívějších lekcích - soubory HTML/CSS/JS, které jsou ve složce `public/`, tento server také zpřístupní.

Po spuštění server naslouchá na portu 3000 na vašem počítači, server by tedy měl být z prohlížeče dostupný na adrese http://localhost:3000/ (nebo také http://127.0.0.1:3000/). Soubory index.html a app.js jsou pak pro prohlížeč viditelné na cestách http://localhost:3000/index.html a http://localhost:3000/app.js - a ostatní endpointy/cesty definované v `server.js` pak jsou dostupné na odpovídajících cestách (`http://localhost:3000/hello` apod.).

Z prohlížeče se dotazujeme na server pomocí funkce `fetch()`, kterou nasměrujeme na adresu `/query` - taková adresa s lomítkem na začátku je absolutní cesta, která se odkazuje na aktuální server (v našem případě `localhost:3000`) a je k názvu serveru připojena, tj. `localhost:3000/query`.

Skript server-query.js slouží pro demonstraci použití knihovny `node-fetch`, pomocí které se můžeme i v prostředí Node posílat HTTP požadavky.

## Odkazy

- Repo na GitLabu: https://gitlab.com/zarybnicky/sdajs-14
- Repo na GitHubu: https://github.com/zarybnicky/sdajs-14/
- NPMJS.com: https://www.npmjs.com/
- TodoMVC: https://todomvc.com/
- Express.js: http://expressjs.com/en/4x/api.html


## JavaScript

### Control structures
```js
let i = 0;
while (true) {
    prikaz();
    i++;
    if (i > 3) {
        break;
    }
}

prikaz();
prikaz();
prikaz();

for (let i = 0; i < 3; i++) {
    prikaz();
}

let i = 0;
while (true) {
    if (i < 3) {
        break;
    }

    prikaz()

    i++;
}

let i = 0;
i < 3
prikaz()
i++  // i = 1
i < 3
prikaz()
i++  // i = 2
i < 3
prikaz()
i++  // i = 3
i > 3


const pole = [1, 2, 3, 4, 5, 6]
//            0, 1, 2, 3, 4, 5

for (let i = 0; i < pole.length; i++) {
    pole[i]
}

pole.forEach(x => console.log(x))
```

### JavaScript variable scope

```js
// global variables
const x = {};
let y;
// var z;


// global function fn
function fn() {
    //NOT a, b

    // can access x, y
    x;

    // local variables a, b
    const a, b;
    a;
}
// NOT a, b;

// global function fn2
// with input arguments/parameters a, b, c
function fn2(a, b, c) {
    x;
    a;
}
// NOT a, b, c


// fn without `return` returns undefined
function fnUndefined() {}

function fnReturnValue() { return 5; }

fnUndefined() === undefined;
fnReturnValue() === 5;


function fnWithArgs(a, b) { return b; }
fnWithArgs(1, 2) === 2;
fnWithArgs() === undefined;



function fn3(arg1, arg2 /* list of arguments */) {
    //function body
}
if (true /* condition */ ) {
    //if body
}
// while, for, for..in



function fn10() {
    function fn11() {

    }
    fn11();
}
fn10();
// NOT fn11



function fnWithFn() {
    const x;

    function fnNested() {
        x;
        const y;
        return y;
    }
    fromInnerFunction = fnNested();
    // ...
    // NOT y
}
fnWithFn();
// NOT fnNested
```




### String functions
- access
    - `"abc"[2] === "c"`
- length
    - `"".length === 0`
- includes/starts/ends
    - `"'The quick brown fox...".includes("fox") === true`
    - `'Is this a question?'.endsWith("?") === true`
    - `"To be, or not to be".startsWith("To be") === true`
- test (RegEx, https://regexr.com/)
    - `"123 456 789".test(/[0-9]{3}[ \-]?[0-9]{3}[ \-]?[0-9]{3}/) === true`
- repeat
    - `"*".repeat(3) == "*" + "*" + "*" == "***"`
- slice
    - `"1234".slice(1, 3) == "23"`
- split
    - `"1,2,3".split(",") == ["1", "2", "3"]`

### Array functions
- concatenation
    - `[1, 2].concat([3, 4]) == [1, 2, 3, 4]`
- length
    - `list.length`
- indexing
    - `list[0]`
    - `list[0] += 5`
    - `list[0] = 5`
    - `[1, 2, 3][0]`
- forEach
    - `[1, 2, 3].forEach(x => console.log(x))`
- inserting
    - `list.push(4)`
    - `list.unshift(4)`
    - `x.splice(1, 0, "4")`
- deleting
    - `list.pop()`
    - `list.shift()`
    - `x.splice(1, 1)`
- contains
    - `[1, 2, 3].contains(5) === false`
    - `numbers.contains(1) === 1`
- find/findIndex
    - `[1, 2, 3, 4, 5].find(x => x > 3) === 4`
- filter
    - `[1, 2, 3, 4, 5].filter(x => x > 3) === [4, 5]`
- map
    - `[1, 2, 3].map(x => x + 3) === [4, 5, 6]`
- slice
    - `[1, 2, 3, 4].slice(1, 3) == [2, 3]`
- join
    - `[1, 2, 3].join("-") == "1" + "-" + "2" + "-" + "3" == "1-2-3"`
    - `[1, 2, 3].join("") == "1" + "" + "2" + "" + "3" == "123"`

### Objects (dictionaries, key/value pairs)

```js
const obj = {
    key: "value",
    key2: 5,
}
const obj2 = {
    a: "",
    b: 1,
}
const joined = {
    obj: obj,
    obj2: obj2,
}

// "Spread operator"
const spread = { ...obj, ...obj2 };
spread == Object.assign({}, obj, obj2)
// { ...{k: 5}, ...{k: 3}, k: 2 } === {k: 2}

obj.key = 1;
obj.key3 = 3;

obj.key == "value"
obj["key"] == "value"

delete obj.key;

const k = "key"
obj[k] == "value"

console.log(obj[k])  // "value"

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
Object.keys(object1) == ["a", "b", "c"]
Object.values(object1) == ["somestring", 42, false]

```

### Booleans
- true, false
- negation
    - `!false === true`
    - `!true === false`

### Numbers
```js
1 + 1
1 * 1
2 ** 3 == 8
Math.sqrt(4) === 2
Math.log10(10) === 1
Math.random()
Math.round(0.500001) == 0.5

3 == 3.0

let n = 0;
n++;
n += 1;
n = n + 1;

n--;
n -= 1;

n *= 2;
n /= 2;
```

### JSON

- JavaScript Object Notation
- Transportní (serializační) formát pro JavaScriptové hodnoty
- JSON.stringify převádí JS hodnotu na JSON řetězec
- JSON.parse načítá JSON řetězec a vytvoří z něj JS hodnotu

```js
JSON.stringify({k: "v"}) == "{\"k\": \"v\"}"
JSON.parse("{\"k\": \"v\"}")   == {k: "v"}
```

```json
5
"b"
true, false
null

[1, 2, 3]

{
    "k": ["v"]
}
```

### Morse code
```js
MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': "'",
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
    '...---...': 'SOS',
    "": " "
}

const input = '.... . -.--   .--- ..- -.. .'
console.log(input.split(" ").map(item => MORSE_CODE[item]).join(""))
```