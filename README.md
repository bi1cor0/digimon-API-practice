# The Digimon ID Look Up
While looking up free APIs I found the DAPI aka the Digimon API using wiki data. But I also found out that Digimon have numerical IDs. Whether these IDs are fanmade or official IDs, I'm not sure. But I did think it was cool that a user could input any value from 1 to 1460 and it would be assigned to any Digimon in the API. I wanted to see how that would work in order to practice using async functions, API navigation and searching through APIs. So, I set up a numerical number input box that would output the Digimon's name and it's picture based on the DAPI's data. 

## Challenges
I honestly thought this implementation would be difficult since it was hard to grasp my mind around the practical use of promises. However, through more learning and asking questions, I realized that promises only relate to outside data bases, like APIs. And that async and await functions mattered more. So once, I understood how async and await worked, I could easily use fetch, and treated the data from the API as normal pieces of objects and array of objects. 

## Future Plans 
I think putting the Digimon's attributes and 'data type' would be good. But I mostly want to take all the pieces of data from the API and reogranize them in to a better evolution flow, if that makes sense. Right now, the Digimon are all scattered and I'm not sure how the IDs assigned. I realize that I might need to make a new API based on the DAPI, but this sounds like an interesting project. 

## Sources:
https://digi-api.com/