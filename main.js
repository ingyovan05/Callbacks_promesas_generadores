import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { environmentsComponent } from './src/concepts/01-environments.js'
import { callbacksComponent } from './src/concepts/02-callbacks.js'
import { promiseComponent } from './src/concepts/03-promesas.js'
import { promiseRaceComponent } from './src/concepts/04-promise-race.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>

  </div>
`
const element =document.querySelector('.card')
//environmentsComponent (element)
//callbacksComponent(element)
//promiseComponent(element)
promiseRaceComponent(element)


