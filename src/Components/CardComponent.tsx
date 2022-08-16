import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import CardItems from "./CardItems";
import { Typography } from '@mui/material';

export const CardComponent = () => {
  const { characters, removeCharacter } = useContext(GlobalContext);

  return (
    <>
      {characters.length > 0 ? (
        <React.Fragment>
          {characters.map((heroes) => (
            <CardItems
              key={heroes.id}
              id={heroes.id}
              name={heroes.name}
              description={heroes.description}
              onClick={() => removeCharacter(heroes.id)}
            />
          ))}
        </React.Fragment>
      ) : (
        <Typography variant="body1"> No data at the moment. </Typography>
      )}
    </>
  );
};

export default CardComponent;