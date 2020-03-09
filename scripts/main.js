import { getOfficers } from "./officers/OfficerProvider.js";
import { CriminalsList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalsList)





getOfficers()