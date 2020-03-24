export const Witness = witness => {
  //will take in a witness object and spit out a witness string
  return `
      <section class="statement">
      <header>
            <h3>${witness.name}</h3>
      </header>
      
      <p>${witness.statements}</p>
      </section>
    
    
    `;
};
