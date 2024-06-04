const subValue = document.getElementById("subValue");
const form = document.getElementById("mainForm")
const nameDisplay = document.createElement("h1");
const monImg = document.createElement(`img`)

form.addEventListener(`submit`, printDigimon)

async function printDigimon(e){
  const digiID = subValue.value
  e.preventDefault();
  const dapiGet = await fetch("https://digi-api.com/api/v1/digimon/" +digiID);
  const digiData = await dapiGet.json();
  nameDisplay.innerText = digiData.name;
  monImg.setAttribute(`src`, digiData.images[0].href)
  document.querySelector("body").appendChild(nameDisplay);
  document.querySelector("body").appendChild(monImg);
}

