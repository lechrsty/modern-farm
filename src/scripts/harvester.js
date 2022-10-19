//function will return array of seed objects
// get output property of each seed object
// add that many of the plant objects that the function returns


export const harvestPlants = (array) => {

    let harvestArray = []


    // iterate through entire main array
    for (let x = 0; x < array.length; x++) {
        if (array[x].type === "Corn") {
            let halfCorn = array[x].output / 2

            // iterate through properties on each object within array
            for (let y = 0; y < halfCorn; y++) {
                harvestArray.push(array[x])
            }
        } else {
            // iterate through properties on each object within array
            for (let y = 0; y < array[x].output; y++) {
                harvestArray.push(array[x])
            }
        }
    } return harvestArray
}
