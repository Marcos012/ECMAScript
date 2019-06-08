function makeSandwich(bread, cheese, sauce) {
    console.log(`Sanduiche com pão ${bread}, queijo ${cheese} e ${sauce}!`);
}

const ingredients = ['branco', 'cheddar', 'maionese'];
makeSandwich(...ingredients);