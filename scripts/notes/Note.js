export const Note = (noteObject, criminalObject) => { //HTML REPRESENTATION OF THE NOTES
    return `
        <section class="note">
            <header>
                <h2>${criminalObject.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>

        </section>
    `
}