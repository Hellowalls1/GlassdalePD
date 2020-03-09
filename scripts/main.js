import { getOfficers } from "./officers/OfficerProvider.js";

import { CriminalsList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
getCriminals().then(CriminalsList)

getOfficers()