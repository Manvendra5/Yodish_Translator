//Create query variables
var translateButton = document.querySelector('#btn-translate');
var inputText = document.querySelector('#input-txt');
var outputText = document.querySelector('#output-box');

var translationAPIUrl = "https://api.funtranslations.com/translate/yoda.json";

//function for constructing the API URL
function constructUrl(text) {
    return translationAPIUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("OOPS! The server is down. Please try again after some time.");
}

function handleClick() {

    //when translate button event is triggered these things will happen:
    //1. Assign input text value to a variable
    var inputtxt = inputText.value;

    //2. use that value to contruct the url
    var contructedURL = constructUrl(inputtxt);

    //3. use this url in fetch and dont forget to add .catch()
    fetch(contructedURL)
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler);

}

translateButton.addEventListener("click", handleClick);
