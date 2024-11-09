
function getNumber(){
    const url = "";
    var response = fetch(url);
    document.getElementById("randomNumber").innerHTML = response;
};


const button = document.getElementById("randomNumberButton");

button.addEventListener("click", getNumber());