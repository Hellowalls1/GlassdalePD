import { getOfficers } from "./officers/OfficerProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import NoteForm from "./notes/noteForm.js";
import "./criminals/knownAssociatesDialog.js"; 
import "./witnesses/WitnessList.js"
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js";
import { NoteList } from "./notes/noteList.js";

getCriminals() //get the criminals from the API
    .then(CriminalList) //getting the list of criminals because you have to get a criminal to select a criminal to make a note
    .then(NoteForm) //
    .then(NoteList)  //
getConvictions().then(ConvictionSelect)
DisplayNotesButton()
DisplayNoteFormButton()

WitnessStatementButton() 

getOfficers()