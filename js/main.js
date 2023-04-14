const elementButtonGen = document.getElementById("buttonGen");
// uso il click per recuperare informazioni da utente e le utilizzo per fare il calcolo
elementButtonGen.addEventListener("click", function(){
    let user = document.getElementById("user").value;
    let km = parseInt(document.getElementById("km").value);
    let eta = document.getElementById("eta").value;
    let prezzo = km * 0.21;
    //se il valore dei chilometri non è un numero allora lanciare alert
    //in caso contrario andare avanti con il programma e calcolare il prezzo
    if(isNaN(km)){

        alert("Dati inseriti non corretti, riprovare.")

    }else{

        if(eta == "minorenne"){

            prezzo *= 0.8;

        } else if(eta == "over 65"){

            prezzo *= 0.6;
            
        }
    }

    prezzo = prezzo.toFixed(2)
    document.getElementById("username").innerHTML = user;
    document.getElementById("prezzo").innerHTML = prezzo +"€";
})

