import React from "react";
import "./Video.css";

function Video () {
    return (
    <div className="Video">
        <h1>LET'S GET SCHWIFTY!</h1>
        <hr />
            <div className="youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4ctK1aoWuqY?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    </div>
    )
}

export default Video;