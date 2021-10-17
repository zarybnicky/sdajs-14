# sdajs-14

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
