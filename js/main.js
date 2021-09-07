import { getEntries } from "../DailyData/dailyData.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { postEntries } from "../DailyData/dailyData.js";

const getAllEntries = (acesss) =>
{
    const entryLog = document.querySelector("#entryLog")

    let display = ""

    const mydata = getEntries()
    .then(info => 
        {
            for(const datas of info)
            {
                display += JournalEntryComponent(datas)
            }

            entryLog.innerHTML += display
        })
}

getAllEntries()

const main = document.querySelector('main')

main.addEventListener('click', (event) =>

{
    if(event.target.id === "submit")
    {
    const dates = new Date()

    const concept = document.querySelector('#concept').value

    const history = document.querySelector('#history').value

    const mood = document.querySelector('#moods').value

    const postdata =
    {
        date: dates,
        concepts: concept,
        journalEntry:history
    }


    postEntries(postdata)
}

}

)

