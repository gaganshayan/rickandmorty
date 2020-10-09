import React from "react";
import "./Video.css";

function Video () {
    return (
    <div className="Video">
        <p>LET'S GET SCHWIFTY!</p>
        <hr />
            <div className="youtube">
                <iframe width="760" height="515" src="https://www.youtube.com/embed/4ctK1aoWuqY?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    </div>
    )
}

export default Video;