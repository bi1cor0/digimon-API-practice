import{subValue, nameDisplay, monImg} from "./index-variables.mjs"


export async function printDigimon(e){
  const digiID = subValue.value
  e.preventDefault();
  const dapiGet = await fetch("https://digi-api.com/api/v1/digimon/" +digiID);
  const digiData = await dapiGet.json();
  nameDisplay.innerText = digiData.name;
  monImg.setAttribute(`src`, digiData.images[0].href)
  document.querySelector("div").appendChild(nameDisplay);
  document.querySelector("div").appendChild(monImg);
}
