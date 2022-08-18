import { createContext, useState } from "react";
import heroes from "../heroes";
import { v4 as uuid } from "uuid";
import { idText } from "typescript";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {

const [characters, setCharacters] = useState([
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
    description: "This is a description"
},


{
    id: 4,
    name: "Ragnar Lothbrok",
    description: "aka Ragnard Sigurdsson"
}
]);

const addCharacter = (name, description) => {
  setCharacters([...characters, {id:uuid(), name, description}])
}

const deleteCharacter = (id) => {
  setCharacters(characters.filter(character => id !== character.id))
}

const editCharacter = (id, updatedCharacter) => {
  setCharacters(characters.map((character) => character.id === id ? updatedCharacter : character))
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

export default GlobalContextProvider