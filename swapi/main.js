const axios = require("axios");

const myButton = document.querySelector('#mainButton')

function getRequest(path) {
    axios.get(path)
    .then(response => {
        var result = response.data;
        console.log(result)
    })
    .catch(error => {
        console.log(error);
    })
}


// myButton.addEventListener('click', () => {console.log("button clicked")})
myButton.addEventListener('click', getRequest('https://swapi.dev/api/planets/?search=alderaan'))
