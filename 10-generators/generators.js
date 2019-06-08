
function* genNames() {
    console.log('Chamando primeiro nome!');
    yield 'Marcos';

    console.log('Chamando segundo nome!');
    yield 'Paulo';

    console.log('Chamando terceiro nome!');
    yield 'Lara';
}

const names = genNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
