

export const generadorFunctionsComponent = (element) => {

//const myGenerator = myFirstGeneratorFuntion()
const genId =idGenerator()

const button = document.createElement('button')
button.innerText='Click Me'
element.append(button)

const renderButton =() =>{
    const {value} = genId.next()
    button.innerText = `Click ${value}`
}

button.addEventListener ('click' , renderButton)


}


function* idGenerator(){
    let currentId=0
    while(true){
        yield `2024 -${++currentId}`
    }
}

function* myFirstGeneratorFuntion(){
    yield 'Primer valor'
    yield '2 valor'
    yield '3 valor'
    yield '4 valor'
    return 'Ya no hay varoles'
    yield 'esto no se ejecuta'
}
