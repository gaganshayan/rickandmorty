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

    const loaded = (<><h1>Name: {character.name}</h1><hr /><img src={character.image} className="profile" /><hr /><h1>Gender: {character.gender}</h1><h1>Life Status: {character.status}</h1><hr /></>)
    const loading = (<h1>loading...</h1>)
    return (
        <>
        <div className="content">
            { character ? loaded : loading }
            <Button />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Click Portal Gun to Generate New Character</h3>
        </div>
        </>
    )
    
}

export default Home;