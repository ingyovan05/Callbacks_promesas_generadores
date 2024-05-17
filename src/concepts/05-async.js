import { heroes } from "./data/heroes"

export const asyncComponent = (element) => {
    const id1= '5d86371fd55e2e2a30fe1ccb'
    console.log('Inicio')
    findHero(id1)
        .then(name =>element.innerHTML=name)
        .catch(error => element.innerHTML = error)
    console.log('Fin')
}

/**
 * 
 * @param {String} id 
 * @returns {promise <String>}
 */
const findHero = async(id)=> {
    const hero = heroes.find(hero => hero.id ===id)
    if (!hero) throw new Error ('No encontrado')
    
    return hero.name
}

