import React from "react";
import "./Lib.css";
import Header from "./Lib_Header.jsx";
import Body from "./Lib_Body.jsx";
import Copyright from "../Homepage/copyright";


function VideoLib() {
    return (
        <div className="">
            <Header />
            <Body />
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default VideoLib;
