// ==UserScript==
// @name         MooMoo.io Script-Injector
// @namespace    http://tampermonkey.net/
// @version      2024-04-27
// @description  https://github.com/RaZoshi
// @author       razoshi
// @match        *://*.moomoo.io/*
// @match        *://*moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @grant        none
// ==/UserScript==

/*
    Author: RaZoshi
    Version: 2024-04-27
    GitHub: https://github.com/RaZoshi
*/

(async function() {
    "use strict"

    const scriptLink = "http://127.0.0.1:5500/script.js";

    await fetch("").then((res) => res.text()).then((text) => {
        eval(text);
    });
})();
