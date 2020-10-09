import React from "react";
import "./About.css";

function About() {
    return(
        <div className="About">
            <p>About</p>
            <h1>This application allows fans of the adult comedy series 'Rick and Morty' to generate random characters from throughout the infinite parallel universes' and displays an image of their characters, some statistics including their name, gender and life status.</h1>
            <hr />
            <h1>I used the <a href="https://rickandmortyapi.com/">Rick and Morty API</a> to display the characters and statistics from the series.</h1>
            <hr />
            <h1>Thanks for checking out my app. If you have any comments or questions, drop me a <a href="mailto:gaganshayan@gmail.com">line</a>.</h1>
            <br />
        </div>
    )
}

export default About;