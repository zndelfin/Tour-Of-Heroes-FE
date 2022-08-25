import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


export const GlobalContext = createContext({});

const GlobalContextProvider = (props : any) => {

const apiURL = "http://localhost:3000/characters/";

async function pullData() {
  const response = await fetch(apiURL);
  const responseData = await response.json();
  
  setCharacters(responseData)
 }

useEffect(() => {
  pullData()
}, [])


const [characters, setCharacters] : any = useState([])


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

