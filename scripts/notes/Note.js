const NoteEntryComponent = (noteitem) => {
 return `
    <section id= class="noteEntry">
    text: ${noteitem.text}
    date: ${noteitem.date}
    suspect: ${noteitem.suspect}
    `
}