import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { CardItems } from "./CardItems";
import { Box, Typography } from '@mui/material';

const CardComponent = () => {
const { characters, deleteCharacter } : any = useContext(GlobalContext);

  return (
    <Box mb={10}>
      {characters.length > 0 ? (
        <>
          {characters.map((heroes : any) => (
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
    </Box>
  );
};

export { CardComponent };