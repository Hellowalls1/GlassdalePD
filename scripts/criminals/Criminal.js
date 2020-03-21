export const Criminal = (criminalObject) => {
    return `
        <section class="criminalInfo">
        <h4 class="criminalName">${criminalObject.name}</h4>
        <div>Age: ${criminalObject.age}</div>
        <div>Crime: ${criminalObject.conviction}</div>
        <div>In: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Release: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
         

         <button id="associates--${criminalObject.id}">Show Associates
         
         </button>
         </section>
    `

}