const catApiURL = 'https://api.thecatapi.com/v1/images/search';

const btnGenerateCat = document.querySelector(".js-generate-cat");

const resultsContainer = document.querySelector(".js-catz");

var numImg = 10;

function fetchData (url) {
    return fetch(catApiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) { 
            return response[0].url;
        })
    }



    btnGenerateCat.addEventListener("click", function() {
    
        resultsContainer.innerHTML="";
        
            for (i = 0; i < numImg; i++) { 
                fetchData(catApiURL).then(url => {
                    let catImg = document.createElement('img');
                    catImg.src = url;
                    resultsContainer.appendChild(catImg);
                });
        }
    });