
let foo = Symbol('name');
let bar = Symbol('name');

let obj = {
    [Symbol('name')]: 'Marcos',
    [Symbol('age')]: 19,
    city: 'Alvorada'
};

const symbols = Object.getOwnPropertySymbols(obj);

const data = symbols.map(sym => obj[sym]);

console.log(data);
