export const catalog = (harvestArray) => {

    let htmlString = ""

    for (let x = 0; x < harvestArray.length; x++) {
        htmlString += `<section class="plant"> ${harvestArray[x].type}</section>`
    }   
    return htmlString
}
