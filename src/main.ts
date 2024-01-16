import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name } from './base/01-types.ts'
import { pokemonIds } from './base/02-objects.ts'
import { charmander } from './base/04-injection.ts'
import { Pikachu } from './base/06-docarations.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <h3>${Pikachu.name}</h3>
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p>${pokemonIds.join(', ')}</p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more ${name}
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
