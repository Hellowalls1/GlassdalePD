export const Note = noteObject => { //HTML REPRESENTATION OF THE NOTES
    return `
        <section class="note">
            <header>
                <h2>${noteObject.criminal}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
        </section>
    `
}