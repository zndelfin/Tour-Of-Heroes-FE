import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardItems() {
  return (
      <Card className="card">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Villain Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample text for test Villain
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="btn btn-delete">Delete</Button>
        <Button className="btn btn-edit">Edit</Button>
      </CardActions>
    </Card>
  );
}
