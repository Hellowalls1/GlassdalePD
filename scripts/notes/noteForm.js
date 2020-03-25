import { saveNote } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
// Handle browser-generated click event in component
// contentTarget.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveNote") {

//         const noteText= document.querySelector("#noteText").value
//         const criminalName = document.querySelector("#criminal").value
//         // Make a new object representation of a note
//         const newNote = {
//             // Key/value pairs here
//             noteText: noteText,
//             criminal: criminalName,
//             timestamp: Date.now()
//         }

//         // Change API state and application state
//         saveNote(newNote)
//     }
// })


const eventHub = document.querySelector(".container")

let visibility = false

//being used to show and hide the noteForm

eventHub.addEventListener("noteFormButtonClicked", customEvent => {

    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalId = document.querySelector("#criminalDropdown").value //giving you the value of the Primary Key (id) of each criminal

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: parseInt(criminalId), //the value of my crimal property on my object I want to push to the API / use type coersion to turn the "id#" into a string "
            timestamp: Date.now()
        }

            // Change API state and application state 
            saveNote(newNote) //sending the newNote object to saveNote
        }
    })
    

const render = () => { 
    contentTarget.classList.add("invisible")

    const allCriminals = useCriminals() // pulling in application state assigning a variable to the useCriminals() function that pulls in data from the API
    contentTarget.innerHTML = `
       <fieldset>
       <fieldset>
        <label for="noteText">Note:</label>
        <input type="text" id="noteText"   
        </fieldset>
        </fieldset>
        <fieldset>
        <label for="criminal">Criminal:</label>
        <select id="criminalDropdown"> 
            <option value="0">Please choose a criminal</option>  //created a dropbdown with option       
                ${
                    allCriminals.map(
                        (currentCriminalObject) => {
                            return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                        }
                    )
                }
            </select>
      
        </fieldset>

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm