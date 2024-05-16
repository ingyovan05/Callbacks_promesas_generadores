import { heroes } from "./data/heroes"


export const promiseComponent = (element) => {
 
    const renderHero = (hero)=>{
        element.innerHTML=hero.name
    }

    const renderHero2 = (hero1,hero2)=>{
        element.innerHTML= `
        <h3> ${hero1.name}</h3>
        <h3> ${hero2.name}</h3>
        `
    }

    const renderError = (error)=>{
        element.innerHTML= `
        <h1>Error:</h1>
        <h3>${error}</h3>`
    }

    const id1= '5d86371fd55e2e2a30fe1ccb'
    const id2 ='5d86371f97c29d020f1e1f6d'

    //forma 1
    // findHero(id1)
    //     .then(Superhero => renderHero(Superhero))
    //     .catch(error => renderError(error))

    // let hero1
    // findHero(id1)
    //     .then((hero) =>{ 
    //         hero1=hero
    //         findHero(id2)
    //         .then((hero2) =>{
    //             renderHero2(hero1,hero2)
    //         })
    //         .catch(error=>renderError(error))
    //     })
    //     .catch(renderError)
    
//     forma 2
//     let hero1
    
// findHero(id1)
//     .then(hero =>{
//         hero1 =hero
//         return findHero(id2)
//     }).then(hero2 => {
//     renderHero2(hero1,hero2)
// })
//     .catch(renderError)

     //forma 3
Promise.all([
        findHero(id1),
        findHero(id2)
    ])
        .then(([hero1,hero2]) => renderHero2(hero1,hero2))
        .catch(renderError)

}

/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
const findHero = (id) => {
   return new Promise((resolve, reject) =>{
        const hero =heroes.find(hero => hero.id===id)
        if (hero) {
            resolve(hero)
            return
        }
        reject(`Heroe no encontrado`)

    })
}

