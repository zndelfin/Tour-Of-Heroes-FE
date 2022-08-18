import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { CardItems } from "./CardItems";
import { Typography } from '@mui/material';

const CardComponent = () => {
  const { characters, deleteCharacter } = useContext(GlobalContext);

  return (
    <>
      {characters.length > 0 ? (
        <>
          {characters.map((heroes) => (
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

export {CardComponent};