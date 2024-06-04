const subValue = document.getElementById("subValue");
const form = document.getElementById("mainForm")

form.addEventListener(`submit`, printDigimon)

function printDigimon(e){
  e.preventDefault();
  console.log(subValue.value)
}

async function fetchData() {
    // Two lines. Fetches data. All we need in most cases
    const result = await fetch("https://digi-api.com/api/v1/digimon");
    const data = await result.json();
  
     //Loops through the list of pokemon fetched from the api
    for (let i = 0; i < data.content.length; i++) {
      // create a new h1 element
      const nameDisplay = document.createElement("h1");
  //
      // sets the text of the element to pokemons name
      nameDisplay.innerText = data.content[i].name;
  //
      // displays the element by appending it to the body
      document.querySelector("body").appendChild(nameDisplay);
    }
  }
fetchData();