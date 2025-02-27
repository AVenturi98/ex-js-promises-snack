/**
 * 🏆 Snack 2
    Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
 */

function lanciaDado() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const number = Math.floor(Math.random() * 6 + 1);

            let verify = Math.random();

            if (verify <= 0.2) reject('Rilancia, dado incastrato')
            else resolve(number)
        }, 1000)
    })
}

lanciaDado()
    .then(num => console.log(num))
    .catch(error => console.error(error))