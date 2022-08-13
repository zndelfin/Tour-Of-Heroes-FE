import React, { useState }from "react";
import { Box } from "@mui/system";
import heroes from "../heroes";

export default function AddNewEntry(props) {
  const [character, setCharacter] = useState({
    name:"",
    description:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("Field Name: " + name + "\nValue: " + value);

    setCharacter((prevChar) => {
      return {
        ...prevChar, 
        [name]: value,
      };
    });
  }

  function submitCharacter(event) {
    props.onAdd(character);
     event.preventDefault();
  }

  return (
    <Box m={10}>
      <form >
        <input 
        type="text" 
        name="name" 
        placeholder="enter name"
        onChange={handleChange}
        value={character.name}
        >
        </input>


        <input type="text" 
        name="description" 
        placeholder="enter description"
        onChange={handleChange}
        value={character.description}
        >

        </input>

        <button onClick={submitCharacter}>ADD CHARACTER</button>
      </form>
    </Box>
  );
}
