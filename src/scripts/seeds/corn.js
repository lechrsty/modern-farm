export const createCorn = () => {
    const seed = {
           type: "Corn",
           height: 180,
           output: 6, 
    }

    // // empty array to display two corn objects
    let cornArray = []

    //create constant that duplicates original corn object (Spread operator)
    const duplicateSeed = {...seed}

    //create constant that pushes original corn object and duplicated corn object into empty array
    const bothSeeds = cornArray.push(seed, duplicateSeed)



    return cornArray
}
