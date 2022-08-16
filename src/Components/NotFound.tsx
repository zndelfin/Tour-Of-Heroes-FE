import { Box, Typography } from "@mui/material";

function NotFound(){
    return (
        <Box m={5} sx={{display:"flex", justifyContent:"center"}}>
        <Typography variant="h3">PAGE NOT FOUND</Typography>
        </Box>
    );
}

export { NotFound };