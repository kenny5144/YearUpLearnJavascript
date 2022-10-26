
function parseAndDisplay(good){
    let name = good;

    let theName = name.indexOf(" ")
    let firstName = name.substring(0,theName)
    let lastName = name.slice(theName)
    console.log(lastName)

}
parseAndDisplay("Kehinde ojo" )