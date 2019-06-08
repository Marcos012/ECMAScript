var data = {
    name: 'Marcos',
    surname: 'Lara',
    age: 19,
    blog: 'https://marcos012.github.io/site',
    social: {
        github: '@marcos012',
        linkedin: '/in/marcos012'
    }
};

const { name, surname } = data;
console.log(name);
console.log(surname);

const { github, linkedin } = data.social;
console.log(github);
console.log(linkedin);
const { linkedin: ln } = data.social;

console.log(ln);
const { city = 'Alvorada' } = data;
console.log(city);