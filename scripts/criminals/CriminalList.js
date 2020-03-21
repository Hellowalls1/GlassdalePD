

import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";
// import { KnownAssociatesDialog } from "./knownAssociatesDialog.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

//listen for click on the dialog box for known associates
contentTarget.addEventListener("click", clickEvent => {
 if (clickEvent.target.id.startsWith("associates--")) {
     //get the id of the criminal
     const [junkass, criminalId] = clickEvent.target.id.split("--")
     //let the system know that the known associates button was clicked
     const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
        detail: {
            chosenCriminal: criminalId
        }
      })
      eventHub.dispatchEvent(showAssociatesEvent )
 }
    
})



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