import { createPlan } from './plan.js'
import { addPlant, usePlants } from './field.js'
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'


let yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
console.log(harvestPlants(usePlants()))


// searches for html for container element
const parentHTMLElement = document.querySelector(".container")

//changes inner HTML of previous parent element
parentHTMLElement.innerHTML = catalog(harvestPlants(usePlants()))






