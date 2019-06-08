const data = [
    {
        name: 'Marcos',
        age: 19,
        city: 'Alvorada'
    },
    {
        name: 'Paulo',
        age: 90,
        city: 'Porto Alegre'
    }
];

const pessoa = data.find(person => person.name === 'Paulo');
const pessoaIndex = data.findIndex(person => person.name === 'Paulo');
console.log(jonasIndex);