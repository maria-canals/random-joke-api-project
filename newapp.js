document.querySelector('#get-joke').addEventListener('click', getJoke)
const url = "https://api.chucknorris.io/jokes/random"


// fetch API
function getJoke(){
fetch(url)
.then(response  => response.json())
.then(data=> updateJoke(data));
}


//getJoke function

function updateJoke(data){
    document.querySelector('#display-joke').textContent = data.value;

}