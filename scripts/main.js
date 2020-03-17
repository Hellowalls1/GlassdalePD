import { getOfficers } from "./officers/OfficerProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import  "./notes/noteForm.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";


getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalList)

DisplayNotesButton()

DisplayNoteFormButton()



getOfficers()