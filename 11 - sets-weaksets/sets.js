let mySet = new Set(['Node', 'Python', 'Ruby']);

mySet.add('Java');
mySet.add('Kotlin');
mySet.add('Perl');
mySet.add('C#');

mySet.delete('Java');

console.log(mySet.has('java'));
console.log(mySet.has('Kotlin'));

console.log(mySet[1]);

let it = mySet.values();

console.log(it.next());

for (name of it) {
    console.log(name);
}
