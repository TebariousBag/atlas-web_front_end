function createElement(data) {
    const paragraph = document.createElement("p");
    // add data to the paragraph
    paragraph.textContent = data;
    
    // add the paragraph to body of document
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    // XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // stack overflow url
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    
    // get rewuest
	// this is the same as fetch
    xhr.open("GET", url, true);
    
    xhr.onload = function () {
		// status code 200 means success
        if (xhr.status === 200) {
            // this is the response from the server
			// parse the response as JSON
            const response = JSON.parse(xhr.responseText);
            
            //  then get the page Object
			// we want to extract the actual content from the data
            const page = response.query.page;
            const pgId = Object.keys(page)[0];
            const extract = page[pgId].extract;
            
            // call function with page[pgId].extract
            callback(extract);
        }
    };
    
    // send the request
    xhr.send();
}
// call function with createElement as the callback
queryWikipedia(createElement);
