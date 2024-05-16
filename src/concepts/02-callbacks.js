import { heroes } from "./data/heroes"


export const callbacksComponent = (element) => {
    const id = '5d86371f25a058e5b1c8a65e'
    findHero(id,(error, hero)=>{
        //element.innerHTML=hero?.name || 'No encontrado'
        if(error) {
            element.innerHTML=error    
                    return
        }
        element.innerHTML=hero.name
    })
}
/**
 * 
 * @param {String} id 
 * @param {(error: String|null ,hero : Object)=>void} callback 
 */
const findHero = (id, callback) =>{
  const hero =  heroes.find(hero => hero.id ===id)  

if(!hero){
    callback(`Heroe con id ${id} no encontrado`)
    return   //undefine 
}

  callback(null, hero)  
}