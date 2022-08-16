import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// INITIAL STATE
const initialState = {
  characters: [
    {
      id: 1,
      name: "Aslaug",
      description: "warrior queen",
    },
    {
      id: 2,
      name: "Ivar the Boneless",
      description: "commander of the Great Heathen Army",
    },
    {
      id: 3,
      name: "Lagertha the Sheildmaiden",
      description: "This is a description",
    },
    {
      id: 4,
      name: "Ragnar Lothbrok",
      description: "aka Ragnard Sigurdsson",
    },
  ],
};

// CREATE CONTEXT
export const GlobalContext = createContext(initialState);

//PROVIDER COMPONENT
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  function addCharacter(character: any) {
    dispatch({
      type: "ADD_CHARACTER",
      payload: character
    });
  }

  function editCharacter(character: any) {
    dispatch({
      type: "EDIT_CHARACTER",
      payload: character
    });
  }

  function removeCharacter(id: Number) {
    dispatch({
      type: "REMOVE_CHARACTER",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        addCharacter,
        editCharacter,
        removeCharacter
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
