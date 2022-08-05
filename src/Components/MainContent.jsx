import React from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box, Container } from "@mui/system";

export default function MainContent(){
    return(
        <Container>
        <Menu />
            <Box sx={{
                display:"flex", 
                flexDirection:"column", 
                float:"right", 
                width:"70%",
                marginTop:"-110px"}}>
            <CardItems/>
            <CardItems/>
            <CardItems/>
            </Box>
        </Container>

    );
}