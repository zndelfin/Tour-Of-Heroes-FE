import React from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box} from "@mui/system";

export default function MainContent(){
    return(
        <Box>
        <Menu  title="Menu"/>

            <Box sx={{
                display:"flex", 
                flexDirection:"column", 
                float:"right", 
                width:"70%",
                marginTop:"-110px"}}>
            <CardItems/>
            </Box>                                                                         
    </Box>
    );
}