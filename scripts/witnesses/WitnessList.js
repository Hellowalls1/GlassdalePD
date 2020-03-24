//

import { getWitnesses, useWitnesses } from "./WitnessProvider.js";
import { Witness } from "./Witness.js";

const contentTarget = document.querySelector(".statementContainer"); //where the things will go into the DOM
const eventHub = document.querySelector(".container"); //eventHub used to communicate
let youCanSeeMe = false
//

eventHub.addEventListener("witnessButtonClicked", customEvent => { //when the button is clicked custom event dispatched witnessList is dispatched witness list is now listening for it thats when we render 
  youCanSeeMe = !youCanSeeMe

  if (youCanSeeMe) {
      contentTarget.classList.remove("invisible")
 //have to pass an array along that you want to render
 getWitnesses().then(    //get the witness data
  () => {
      
    const allTheWitnesses = useWitnesses(); //allTheWitnesses is now a array made with the witnesses from the data provider
    contentTarget.innerHTML = allTheWitnesses.map(
      //itterate and produces a new array in that array is whatever we are going to return from our callback function
      currentWitnessStatementObject => { 
        const statementHTML = Witness(currentWitnessStatementObject); //HTML representation of witness stored in new variable
        return statementHTML //return the HTML to be placed in new array
      }
    ).join("")
  }
)
  }


  else {
      contentTarget.classList.add("invisible")
  }


  //have to pass an array along that you want to render
  getWitnesses().then(    //get the witness data
    () => {
        
      const allTheWitnesses = useWitnesses(); //allTheWitnesses is now a array made with the witnesses from the data provider
      contentTarget.innerHTML = allTheWitnesses.map(
        //itterate and produces a new array in that array is whatever we are going to return from our callback function
        currentWitnessStatementObject => { 
          const statementHTML = Witness(currentWitnessStatementObject); //HTML representation of witness stored in new variable
          return statementHTML //return the HTML to be placed in new array
        }
      ).join("")
    }
  )
})
