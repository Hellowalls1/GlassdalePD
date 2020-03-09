import { Criminal } from "./Criminal.js";
import { useCriminals } from "./CriminalProvider.js";
useCriminals


const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalsList = () => {

    const criminalArray = useCriminals()
        


    criminalArray.forEach(criminalObject => { 
   contentTarget.innerHTML += Criminal(criminalObject)
    })
//choosing object from array using .forEach() array method. Array method must contain for loop info

}




