const secretNumber = 28;
    
const user = {
    name: 'Marcos',
    age: 19
};

Object.freeze(user);

user.age = 26;

console.log(user);