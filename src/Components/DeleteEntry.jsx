import React from "react";


export default function itemDelete(props){
    function handleClick(){
        props.onDelete(props.id);
    }
    return (
        <Box>
            
        </Box>
    )
}