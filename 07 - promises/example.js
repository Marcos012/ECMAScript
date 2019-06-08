const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'real', value: 3.50 });
    }, 5000);
});

const countries = new Promise((resolve, reject) => {
    resolve(['Brasil', 'Portugal', 'Paraguai']);
});

Promise
    .all([currency, countries])
    .then(responses => {
        console.log(responses);
    })

Promise
    .race([currency, countries])
    .then(responses => {
        console.log(responses);
    })
