import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => { //notes be clicked
    render() // as soon as the button is clicked this function will be invoked which does what is happening in 16-26
})




const render = () => { //extract data from data provider //  

    const contentTarget = document.querySelector(".notesContainer")
    
    getNotes().then(() => { //has the note provider get the notes from the api / then when they all come back (pulled into application state) //will import the notes array into this

        const criminalCollection = useCriminals() //bringing in all of the criminals

        const allTheNotes = useNotes() //stores all the notes in a new variable called allTheNotes that you pulled in from the data provider//

         contentTarget.innerHTML = allTheNotes.map(note => { //iterate array with a map to convert objects into HTML

            const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminal) //if the criminal id and the note id match then return

            return Note(note, relatedCriminal)
            }
         ).join("") // joins all the objects as strings and puts all that shit at the end into the html
    })
}





const NoteList = () => {
    const notes = useNotes()
    const criminals = useCriminals()

    render(notes, criminals)
}



//for each when you want to itterate the array but you dont want to convert into anything just list instructions
//.map for when you want to convert while itterating