const poa = ['Parcão', 'Redenção', 'Germânia'];

const parqueFavorito = poa.map(function (parque) {
    return `Meu parque favorito é ${parque}!`;
});

const parqueFavoritoArrowFN = poa.map(parque => {
    return `Meu parque favorito é ${parque}!`;
});

const parqueFavoritoArrowUmaLinha = poa.map(parque => `Meu parque favorito é ${parque}!`);

const parque = poa
    .filter(parque => parque === 'Germânia')
    .map(parque => `Meu parque favorito é ${parque}!`);

console.log(parque);