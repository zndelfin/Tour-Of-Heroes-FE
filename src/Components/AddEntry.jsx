import React from "react";
import { Box } from "@mui/system";

// NOT WORKING YET
export default function AddEntry(){
    return (
    <Box>
        <form>
            <input name="name" placeholder="Name"></input>
            <textarea name="description" placeholder="Type your character desciption" rows="4"></textarea>
            <button> Add </button>
       </form>
    </Box>
    )
}