

export const promiseRaceComponent = (element) => {
    element.innerHTML='Loading'
    const renderValue =(value) =>{
        element.innerHTML =value
    }
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(value=>renderValue(value))

}

const slowPromise=()=>new Promise (resolve =>{
    setTimeout(() => {
    resolve('Slow promise')
      }, 2000);
})

const mediumPromise=()=>new Promise (resolve =>{
    setTimeout(() => {
    resolve('medium promise')
      }, 1500);
})

const fastPromise=()=>new Promise (resolve =>{
    setTimeout(() => {
    resolve('fast promise')
      }, 1000);
})