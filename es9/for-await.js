async function* genNames() {
    yield 'Marcos';
    yield 'Paulo';
    yield 'Lara';
}


async function teste() {
    for await (let nome of genNames()) {
        console.log(nome);
    }
};


