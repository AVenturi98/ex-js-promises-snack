/**
 * 🏆 Snack 1
    Ottieni il titolo di un post con una Promise.

    Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
 */


function getPostTitle(id) {

    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then(obj => resolve(console.log(obj, 'TITLE POST', obj.title)))
            .catch(err => reject(console.error(err)))
    })

}

// getPostTitle(1)


/**
 * 🎯 Bonus: Ottieni l'intero post con l'autore
    Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
 */

function getTitle(id) {

    let user_id = ''

    new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then(obj => {
                user_id = obj.userId;

                resolve(
                    new Promise((resolve, reject) => {
                        fetch(`https://dummyjson.com/users/${user_id}`)
                            .then((res) => res.json())
                            .then(user => resolve(console.log(obj, user)))
                            .catch(err => reject(console.error(err)))
                    }))

            })
            .catch(err => reject(console.error(err)))
    })
}

getTitle(1)