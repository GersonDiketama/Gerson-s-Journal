

export const getEntries = (entries) =>
{
    return fetch('http://localhost:8088/journalEntries')
    .then(response => response.json())
    .then( data =>
        {
            return data;
        })
}



export const postEntries = (postdata) => 
{
    return fetch('http://localhost:8088/journalEntries',
    
    {
        method:"POST",
        headers:
        {
            "content-type": "application/json"
        },

        body: JSON.stringify(postdata)
    })
    .then(response => response.json)
    
}