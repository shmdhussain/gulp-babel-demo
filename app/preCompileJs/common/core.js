var text = `hello ${6+4}`;
console.log(text);


/*START: Fetch JSON Data from url and return promise with data*/
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}




function fetchJsonData(dataUrl) {
    return fetch(dataUrl)
        .then(status)
        .then(json);
}
/*END: Fetch JSON Data from url and return promise with data*/