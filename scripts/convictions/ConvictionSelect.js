// /*
//  *   ConvictionSelect component that renders a select HTML element
//  *   which lists all convictions in the Glassdale PD API
//  */
import { useConvictions } from "./ConvictionProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") { //specifically selects one individual dropdown that is crime selection
        const theCrimeThatWasChosen = changeEvent.target.value //the crime you select = the value of
        // Create custom event. Provide an appropriate name.
        
        const crimeChosenEvent = new CustomEvent("chosenCrime", {
            detail: {
                crime: theCrimeThatWasChosen
        }})
        // Dispatch to event hub
            
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
        ${convictionsCollection.map(singleConviction => {
            return `<option>${singleConviction.name}</option>`
           })}
        </select>
    `
}


const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}

export default ConvictionSelect