

import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("chosenCrime", event => {


    //get the criminals
    const criminals = useCriminals()
    //get the crime
    const theCrimeThatWasChosen = event.detail.crime
    
   //look at all the criminals and figure out which one was the vandal
   const guiltyCriminals = criminals.filter(criminal => {
    if (criminal.conviction === theCrimeThatWasChosen) {
        return true
    }
    return false
   })


    //clear inner HTML of the criminal list because
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
    contentTarget.innerHTML += Criminal(singleCriminal)
}
})

export const CriminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}