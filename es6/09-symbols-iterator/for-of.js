var txt = 'Porto';
var it = txt[Symbol.iterator]();

for (letter of txt) {
    console.log(letter);
    if (letter === 'a') break;
}
