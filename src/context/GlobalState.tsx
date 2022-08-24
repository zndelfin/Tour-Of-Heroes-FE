import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


export const GlobalContext = createContext({});

const GlobalContextProvider = (props : any) => {

//  const [characters, setCharacters] : any = useState([
// {
//     id: 1,
//     name: "Aslaug",
//     description: "warrior queen"
// },

// {
//     id: 2,
//     name: "Ivar the Boneless",
//     description: "commander of the Great Heathen Army"
// },


// {
//     id: 3,
//     name: "Lagertha the Sheildmaiden",
//     description: "aka Hlaógerór"
// },


// {
//     id: 4,
//     name: "Ragnar Lothbrok",
//     description: "aka Ragnard Sigurdsson"
// }
// ]);



//let initialValues = [{
//       id: 1,
//       name: "Aslaug",
//       description: "warrior queen"
//   },
  
//   {
//       id: 2,
//       name: "Ivar the Boneless",
//       description: "commander of the Great Heathen Army"
//   },
  
  
//   {
//       id: 3,
//       name: "Lagertha the Sheildmaiden",
//       description: "aka Hlaógerór"
//   },
  
  
//   {
//       id: 4,
//       name: "Ragnar Lothbrok",
//       description: "aka Ragnard Sigurdsson"
//   }];

//   console.log(typeof initialValues); //results to object

const apiURL = "http://localhost:3000/characters/";
let displayData;

async function pullData() {
  const response = await fetch(apiURL);
  const responseData = await response.json();
  //console.log(typeof responseData) //typeof object //returns array of objects
  
  return displayData = responseData;
 }

useEffect(() => {
  pullData()
}, [])


const [characters, setCharacters] = useState([])


const addCharacter = (name: any, description: any) => {
  // setCharacters([...characters, {id:uuid(), name, description}]) 
}

const deleteCharacter = (id: number) => {
  setCharacters(characters.filter((character: { id: number; }) => id !== character.id))
}

const editCharacter = (id: number, updatedCharacter: any) => {
  // setCharacters(characters.map((character: { id: number; }) => 
  // character.id === id ? updatedCharacter : character))
}


  return (
    <GlobalContext.Provider value = {{
      characters, 
      addCharacter, 
      deleteCharacter, 
      editCharacter
      }}>
        {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

