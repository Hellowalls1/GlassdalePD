export const Criminal = (criminalObject) => {
    return `
        <section class="criminalInfo">
        <h4>${criminalObject.name}</h4>
        <div>Age: ${criminalObject.age}</div>
        <div>Crime: ${criminalObject.conviction}</div>
        <div>${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
         </section>
    `
}