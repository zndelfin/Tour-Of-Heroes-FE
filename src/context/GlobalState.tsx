import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const GlobalContext = createContext({});

const GlobalContextProvider = (props: any) => {
  const [characters, setCharacters]: any = useState([]);

  const apiURL = "http://localhost:3000/characters/";

  async function pullData() {
    const response = await fetch(apiURL);
    const responseData = await response.json();

    setCharacters(responseData);
  }

  useEffect(() => {
    pullData();
  }, []);

  const addCharacter = (name: string, description: string) => {
    setCharacters([...characters, { id: uuid(), name, description }]);
    fetchPost(name, description);
  };

  async function fetchPost(name: string, description: string) {
    const response = await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      const message = `Failed request: " ${response.status}`;
      throw new Error(message);
    }
    const responseData = await response.json();
    return responseData;
  }

  const deleteCharacter = (id: string) => {
    setCharacters(
      characters.filter((character: { id: string }) => id !== character.id)
    );
    fetchDelete(id);
  }

  async function fetchDelete(id: string){
  const response = await fetch(`http://localhost:3000/characters/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    const message = `Failed request: " ${response.status}`;
    throw new Error(message);
  }
}

  const editCharacter = (id: number, updatedCharacter: any) => {
    setCharacters(
      characters.map((character: { id: number }) =>
        character.id === id ? updatedCharacter : character
      )
    );

    fetchPatch(
      updatedCharacter.id,
      updatedCharacter.name,
      updatedCharacter.description
    );
  };

  async function fetchPatch(id: string, name: string, description: string) {
    const response = await fetch(`http://localhost:3000/characters/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      const message = `Failed request: " ${response.status}`;
      throw new Error(message);
    }
    const responseData = await response.json();
    return responseData;
  }

  return (
    <GlobalContext.Provider
      value={{
        characters,
        addCharacter,
        deleteCharacter,
        editCharacter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
