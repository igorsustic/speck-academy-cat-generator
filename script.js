const catApiURL = 'https://api.thecatapi.com/v1/images/search';

const btnGenerateCat = document.querySelector(".js-generate-cat");

const resultsContainer = document.querySelector(".js-catz");

// varijabla za loop
var numImg = 10;

// funkcija koja poziva fetch, vraća promise, objekt koji u sebi sadrži url (response[0].url) kojeg ćemo proslijediti funkciji na listener-u
function fetchData (url) {
    return fetch(catApiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) { 
            return response[0].url;
        })
        .catch(error => console.error(error));
    }

// listener na button, unutar funkcije se poziva funkcija fetchData(catApiURL) koja dodaje URL potreban za formiranje IMG tag-a
    btnGenerateCat.addEventListener("click", function() {
        
        // čisti slike iz div-a resultsContainer
        resultsContainer.innerHTML="";
        
            for (i = 0; i < numImg; i++) { 
                fetchData(catApiURL).then(url => {
                    let catImg = document.createElement('img');
                    catImg.src = url;
                    resultsContainer.appendChild(catImg);
                });
        }
    });