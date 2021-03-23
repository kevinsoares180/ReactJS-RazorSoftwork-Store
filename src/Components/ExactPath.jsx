import React from 'react';
import {useParams} from "react-router-dom";
import GamePage from './GamePage';
import data from "../data.json";
import Error404 from './Error404';

const ExactPath = () => {
    const { idroute } = useParams()
    console.log("myid " + idroute);

    return (
        <>

               { idroute > data.Games.length || isNaN(idroute) ? <Error404/> : <GamePage id={idroute} />}
            
        </>
    );
}
export default ExactPath;
