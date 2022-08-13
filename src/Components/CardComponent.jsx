import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import CardItems from "./CardItems";
import { Box } from "@mui/system";

export const CardComponent = () => {
  const { characters, removeCharacter } = useContext(GlobalContext);

  return (
    <React.Fragment>
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
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};

export default CardComponent;