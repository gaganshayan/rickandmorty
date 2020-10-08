import React from "react";
import "./button.css";

function button() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <button onClick={refreshPage}><img src="https://res.cloudinary.com/dtybx6nov/image/upload/v1602190849/portal_gun_2_nzimgo.png"></img></button>
        </div>
    );
}

export default button;