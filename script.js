var random = () => {var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://anime-quote-api.000webhostapp.com/random", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result);
                    jsonDoc = JSON.parse(result);
                    document.getElementById("citation").innerHTML = jsonDoc["citation"]
                    document.getElementById("auteurAnime").innerHTML = jsonDoc["auteur"] + " ~ " + jsonDoc["anime"]
                    })
    .catch(error => console.log('error', error));}
