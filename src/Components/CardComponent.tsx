import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { CardItems } from "./CardItems";
import { Typography } from '@mui/material';

const CardComponent = () => {
const { characters, deleteCharacter } : any = useContext(GlobalContext);

  return (
    <>
      {characters.length > 0 ? (
        <>
<<<<<<< HEAD
          {characters.map((heroes : {id: string|number, name: string, description:string}) => (
=======
          {characters.filter((_ : any): any => _).map((heroes : any) => (
>>>>>>> parent of f44174e (TECH 216: Added port number as environment variable)
            <CardItems
              key={heroes.id}
              id={heroes.id}
              name={heroes.name}
              description={heroes.description}
              onClick={() => deleteCharacter(heroes.id)}
            />
          ))}
        </>
      ) : (
        <Typography variant="body1"> No data at the moment. </Typography>
      )}
    </>
  );
};

export { CardComponent };