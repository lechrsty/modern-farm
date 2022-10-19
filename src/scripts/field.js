let displayPlants = []

// define and export a constant that accepts seed as parameter and pushes that seed into the display plants array
export const addPlant = (seed) => {
        if (Array.isArray(seed)) {
            const firstSeed = seed[0]
            const secondSeed = seed[1]

            displayPlants.push(firstSeed, secondSeed)

        } else {

            displayPlants.push(seed)
        }
        return displayPlants
    }

// define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
    return displayPlants.map(plant => ({...plant}))
}

