
let obj1 = {
    name: 'Marcos',
    age: 19
};

let obj2 = {
    name: 'Paulo',
    age: 91
};

let wm = new WeakMap();

wm.set(obj1, 'Info do Marcos');
wm.set(obj2, 'Info do Paulo');
