/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions() //assigning variable to array of convictions
    //
    const render = (convictionsCollection => { //assigining a variable for the function that renders the list of convictions
     contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
                 ${convictionsCollection.map(convictions => {
                 return `<option value="${convictions.id}">${convictions.name}</option>`
                })}
            </select>
        `
    }
    )

    render(convictions)
}

export default ConvictionSelect