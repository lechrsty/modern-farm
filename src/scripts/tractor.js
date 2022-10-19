import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// yearlyPlan is a two-dimensional array, can think about it as a grid

export const plantSeeds = (yearlyPlan) => {
    for (const array of yearlyPlan) {
        for (const nestedArray of array) {

            if (nestedArray === "Potato") {
                addPlant(createPotato())

            } if (nestedArray === "Soybean") {
                addPlant(createSoybean())

            } if (nestedArray === "Corn") {
                addPlant(createCorn())

            } if (nestedArray === "Wheat") {
                addPlant(createWheat())

            } if (nestedArray === "Asparagus") {
                addPlant(createAsparagus())

            } if (nestedArray === "Sunflower") {
                addPlant(createSunflower())

            } 
        }
    } 
}
