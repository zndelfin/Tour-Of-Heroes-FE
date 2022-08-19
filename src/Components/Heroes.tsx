import { CardComponent } from "./CardComponent";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


 function Heroes(){
    return (
        <Box m={5}>
        <Typography variant="h4">HEROES</Typography>
        <CardComponent />
        </Box>
    )
}

export { Heroes };