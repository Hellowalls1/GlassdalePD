import { useCriminals } from "./CriminalProvider.js";

//define the content target of the dialog box
const contentTarget = document.querySelector(".knownAssociatesContainer");
//define the event hub container
const eventHUb = document.querySelector(".container");

eventHUb.addEventListener("knownAssociatesClicked", customEvent => {
  // Get the criminal id and save it to a new variable
  const criminalId = customEvent.detail.chosenCriminal;
  // Define criminal array to new variable
  const criminalArray = useCriminals();

  const iFoundYou = criminalArray.find(currentCriminal => {
      
    if (currentCriminal.id === parseInt(criminalId)) {
      return true;
    }
    return false;
  });
  KnownAssociatesDialog(iFoundYou);
  const myFunnyDialog = document.querySelector("#funny");
  myFunnyDialog.showModal();
});
export const KnownAssociatesDialog = criminalObject => {
  contentTarget.innerHTML = `  //this is where the dialog is going to go as an HTML representation
    <dialog id="funny">
         ${criminalObject.known_associates.map(
           //iterating over the known_associates array of objects
           currentAssociate => {
             return `<div>${currentAssociate.name}</div>`;
           }
         )}
    
    </dialog> `;
};
