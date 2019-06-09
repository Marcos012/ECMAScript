const a = [1, [2, 3], 4, [5, 6]];
a.flat();

const b = [1, [2,[3,[4]]],[5,[6]],7,[8,[9,[10]]]];
b.flat(3);

['Bem-vindo'].flatMap(item => [...item]);