const elementButtonGen = document.getElementById("buttonGen");

elementButtonGen.addEventListener("click", function(){
    let user = document.getElementById("user").value;
    let km = parseInt(document.getElementById("km").value);
    let eta = document.getElementById("eta").value;
    let prezzo = km * 0.21;

    console.log("Ciao", user, "questi sono i tuoi km:", km, "siccome sei", eta, "allora paghi:", prezzo )
})

