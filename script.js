const pole = [1, 2, 3, 4]

const novePole = []
pole.forEach(x => {
    if (x % 2 === 0) {
        novePole.push(x);
    }
})
console.log(novePole)



// vypis cisla mezi "a" a "b"
// vstup: cisla "a" a "b"
// vystup: na konzoli vsechna suda cisla mezi a a b
// proces:
// 1. lokalni promenna i = 1
// 2. pokud i je sude, vypis i
// 3. zvetsime i o 1
// 4. pokud i <= b, bez na krok 1.

function vypisCislaMezi(a, b) {
    for (let i = a; i < b + 1; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

function vypisCislaMezi2(a, b) {
    let i = a;
    while (i <= b) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++;
    }

}
vypisCislaMezi2(10, 20)