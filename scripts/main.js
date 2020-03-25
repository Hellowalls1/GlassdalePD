import { getOfficers } from "./officers/OfficerProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import NoteForm from "./notes/noteForm.js";
import "./notes/noteList.js";
import "./criminals/knownAssociatesDialog.js"; 
import "./witnesses/WitnessList.js"
import { WitnessStatementButton } from "./witnesses/WitnessStatementButton.js";
NoteForm()
getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalList).then(NoteForm) //get the criminals then invoke criminal list then invoke noteform
DisplayNotesButton()
DisplayNoteFormButton()

WitnessStatementButton() 

getOfficers()