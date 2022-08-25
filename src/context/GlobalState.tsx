import { ConsoleLogger } from "@nestjs/common";
import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


export const GlobalContext = createContext({});

const GlobalContextProvider = (props : any) => {

const [characters, setCharacters] : any = useState([]);

const apiURL = "http://localhost:3000/characters/";

async function pullData() {
  const response = await fetch(apiURL);
  const responseData = await response.json();
  
  setCharacters(responseData)
 }

useEffect(() => {
  pullData()
}, [])



const addCharacter = (name: any, description: any) => {

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      name,
      description
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  setCharacters([...characters, {id:uuid(), name, description}]) 
}

const deleteCharacter = (id: number) => {

  fetch(`http://localhost:3000/characters/${id}`, 
  {
    method: "DELETE"
  })

  setCharacters(characters.filter((character: { id: number; }) => id !== character.id))
}

const editCharacter = (id: number, updatedCharacter: any) => {
  setCharacters(characters.map((character: { id: number; }) => 
  character.id === id ? updatedCharacter : character))

  fetch(`http://localhost:3000/characters/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      id: updatedCharacter.id,
      name: updatedCharacter.name,
      description: updatedCharacter.description
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
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

