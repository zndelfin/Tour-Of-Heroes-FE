import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { CardItems } from "./CardItems";
import { Typography } from '@mui/material';

const CardComponentNEST = () => {
const { deleteCharacter } : any = useContext(GlobalContext);
const [data, setData] = useState([]);

const apiURL = "http://localhost:3000/characters/";
const fetchData = () => {
  fetch(apiURL)
    .then(response => {
      return response.json()
    })
    .then(result => {
      setData(result)
    })
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((heroes : any) => (
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

export {CardComponentNEST};