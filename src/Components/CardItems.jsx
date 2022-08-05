import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CardItems() {
  return (
    <Box>
      <Card sx={{marginTop:"20px", marginBottom:"20px"}}>
          <CardContent sx={{backgroundColor:"#F9F9F9"}}>
            <Typography gutterBottom variant="h5" component="div">
              Aslaug
            </Typography>
            <Typography variant="body2" color="text.secondary">
              warrior queen
            </Typography>
          </CardContent>
          <Box sx={{color:"black"}}>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}>
            <DeleteIcon sx={{fontSize:"medium"}}/>
            Delete
            </Button>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}><EditIcon sx={{fontSize:"medium"}}/>Edit</Button>
          </Box>
      </Card>

      <Card sx={{marginTop:"20px", marginBottom:"20px"}}>
          <CardContent sx={{backgroundColor:"#F9F9F9"}}>
            <Typography gutterBottom variant="h5" component="div">
              Ivar the Boneless
            </Typography>
            <Typography variant="body2" color="text.secondary">
              commander of the Great Heathen Army
            </Typography>
          </CardContent>
          <Box sx={{color:"black"}}>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}>
            <DeleteIcon sx={{fontSize:"medium"}}/>
            Delete
            </Button>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}><EditIcon sx={{fontSize:"medium"}}/>Edit</Button>
          </Box>
      </Card>


      <Card sx={{marginTop:"20px", marginBottom:"20px"}}>
          <CardContent sx={{backgroundColor:"#F9F9F9"}}>
            <Typography gutterBottom variant="h5" component="div">
              Lagertha the Shieldmaiden
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aka Hlaógerór
            </Typography>
          </CardContent>
          <Box sx={{color:"black"}}>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}>
            <DeleteIcon sx={{fontSize:"medium"}}/>
            Delete
            </Button>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}><EditIcon sx={{fontSize:"medium"}}/>Edit</Button>
          </Box>
      </Card>


      <Card sx={{marginTop:"20px", marginBottom:"20px"}}>
          <CardContent sx={{backgroundColor:"#F9F9F9"}}>
            <Typography gutterBottom variant="h5" component="div">
              Ragnar Lothbrok
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aka Ragnar Sigurdsson
            </Typography>
          </CardContent>
          <Box sx={{color:"black"}}>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}>
            <DeleteIcon sx={{fontSize:"medium"}}/>
            Delete
            </Button>
            <Button sx={{width:"50%", color:"black", textTransform:"none", border:"solid 1px #DCDCDC"}}><EditIcon sx={{fontSize:"medium"}}/>Edit</Button>
          </Box>
      </Card>

    </Box>
    
  );
}
