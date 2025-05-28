async function saveData(jsPsychdata){
    const fetch_prom = await fetch('/submit', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({data: jsPsychdata})
    })
    // Make sure, the HTTP-Request succeeded (200 response code)
    // See: https://developer.mozilla.org/en-US/docs/Web/API/Response
    .then(r => {
        switch (r.ok) {
            case true: return r
            case false: throw new Error(`${r.status} ${r.statusText}`)
        }
    })
    // Parse the response body as JSON
    .then(r => r.json())
    // Check, whether the Lou-Server accepted the data
    .then(r => {
        switch (r.code) {
            case 0: return r
            default: throw new Error(`${r.code} ${r.message}`)
        }
    })
    // Display an alert, if any error occurred along the .then-chain:
    .catch(e => { alert(e.message) })

    return fetch_prom
};

// I am adding a sleep function that indicates how long the end screen stays on before particiants are redirected to Prolific
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function redirectAfterDelay(ms, url) {
    await sleep(ms);
    window.location.href = url;
}
