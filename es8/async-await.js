promise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Marcos");
        }, 2000);
    });
}

async function darBoasVindas() {
    const externalFetchedText = await promise();
    console.log(`Bem-vindo, ${externalFetchedText}`);
}

darBoasVindas();