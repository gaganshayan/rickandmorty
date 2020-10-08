import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom"
import { getDefaultNormalizer } from "@testing-library/react";
import Button from "../Button/button.js";
const Home = (props) => {

  const rmURL = 'https://rickandmortyapi.com/api/character'

    const [character, setCharacter] = useState([]);

    const makeApiCall = async () => {
        const response = await fetch (rmURL);
        const json = await response.json();
        console.log(json)
        const index = Math.floor(Math.random()*json.results.length) 
        setCharacter(json.results[index])
    };

    useEffect(() => {
        makeApiCall();
    },[]);

    const loaded = (<><img src={character.image} /><h1>{character.name}</h1><h1>{character.gender}</h1><h1>{character.status}</h1></>)
    const loading = (<h1>loading...</h1>)
    return (
        <>
        <div className="content">
            { character ? loaded : loading }
            <Button />
        </div>
        </>
    )
    
}

export default Home;