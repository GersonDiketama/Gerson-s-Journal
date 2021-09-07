// /*
//  *  Purpose:
//  *    To render as many journal entry components as
//  *    there are items in the collection exposed by the
//  *    data module component
//  */
// import { getJournalEntries } from "./JournalData.js"
// import { JournalEntryComponent } from "./JournalEntry.js"

// // DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog")

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data module component
//     const entries = getJournalEntries()

//     let response = ""

//     for (const entry of entries) {
//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */
//         response += JournalEntryComponent(entry)
//     }

//     entryLog.innerHTML += response
// }




// function getData()
// {
//     return fetch('Your URL')
//     .then(response => response.json())
//     .then( data => { console.log(data)})
// }