import{subValue, nameDisplay, monImg} from "./index-variables.mjs" //importing variables from the variables mjs


export async function printDigimon(e){ //created async function to get data from the DAPI
  const digiID = subValue.value //assigned new var for the Digimon ID using the user's value.
  e.preventDefault();
  const dapiGet = await fetch("https://digi-api.com/api/v1/digimon/" +digiID); //dynamically getting the Digimon data through user input by adding the numerical value to the DAPI's URL.
  const digiData = await dapiGet.json(); //converting data to json through an await function.
  nameDisplay.innerText = digiData.name; //grabbing the nameDisplay variable and editing the inner text by getting the value of the Digimon's data in the name key.
  monImg.setAttribute(`src`, digiData.images[0].href) //setting attribute of the create img var monImg to whatever is in the href portion of the Digimon's data. 
  document.querySelector("div").appendChild(nameDisplay); //appending child onto the empty div on the HTML side. This is the name of Digimon.
  document.querySelector("div").appendChild(monImg); //appending child but this time the image of the file. 
}
