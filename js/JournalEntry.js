/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        <h2>Concepts: ${entry.concepts}</h2>
        <li>${entry.date}</li>   
        <p>${entry.journalEntry}</p>
        <h4>${entry.timestamp}</h4>
    </section>
    `
}