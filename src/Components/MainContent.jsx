import React from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box, Container } from "@mui/system";

export default function MainContent(){
    return(
<<<<<<< HEAD
        <Container sx={{padding:"0px", margin:"0px"}}>
=======
        <Container>
>>>>>>> 0e37c73da841806ed101af9578930e7dfae32c95
        <Menu />
            <Box sx={{
                display:"flex", 
                flexDirection:"column", 
                float:"right", 
                width:"70%",
                marginTop:"-110px"}}>
            <CardItems/>
<<<<<<< HEAD
            {/* <CardItems/>
            <CardItems/>
            <CardItems/> */}
=======
            <CardItems/>
            <CardItems/>
>>>>>>> 0e37c73da841806ed101af9578930e7dfae32c95
            </Box>
        </Container>

    );
}