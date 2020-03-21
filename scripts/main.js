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
NoteForm()
getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalList)

DisplayNotesButton()

DisplayNoteFormButton()



getOfficers()