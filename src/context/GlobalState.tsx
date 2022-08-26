import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";


export const GlobalContext = createContext({});

const GlobalContextProvider = (props : any) => {

const [characters, setCharacters] : any = useState([
{
    id: 1,
    name: "Aslaug",
    description: "This is a description"
},

{
    id: 2,
    name: "Ivar the Boneless",
    description: "commander of the Great Heathen Army"
},


{
    id: 3,
    name: "Lagertha the Sheildmaiden",
    description: "aka Hlaogeror"
},


{
    id: 4,
    name: "Ragnar Lothbrok",
    description: "aka Ragnard Sigurdsson"
}
]);

const addCharacter = (name: any, description: any) => {
  setCharacters([...characters, {id:uuid(), name, description}]) 
}

const deleteCharacter = (id: number) => {
  setCharacters(characters.filter((character: { id: number; }) => id !== character.id))
}

const editCharacter = (id: number, updatedCharacter: any) => {
  setCharacters(characters.map((character: { id: number; }) => 
character.id === id ? updatedCharacter : character))
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