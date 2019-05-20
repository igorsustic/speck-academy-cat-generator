const catApiURL = 'https://api.thecatapi.com/v1/images/search';

const btnGenerateCat = document.querySelector(".js-generate-cat");

const resultsContainer = document.querySelector(".js-catz");



function fetchData (url) {
    return fetch(catApiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) { 
            return response[0].url;
        })
    }