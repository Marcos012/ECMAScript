fetch('https://api.github.com/users/Marcos012')
    .then(data => data)
    .catch(err => err)
    .finally(() => {
        console.log('Entrou no finally')
    });