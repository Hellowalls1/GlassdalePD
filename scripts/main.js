import { getOfficers } from "./officers/OfficerProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import NoteForm from "./notes/noteForm.js";
NoteForm()


getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalList)





getOfficers()