/**
 * 🏆 Snack 1
    Ottieni il titolo di un post con una Promise.

    Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
 */


function getPostTitle(id) {

    return new Promise((resolve, reject) => {
        fetch(` https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then(obj => resolve(console.log(obj.title)))
            .catch(err => reject(console.error(err)))
    })

}

getPostTitle(1)
