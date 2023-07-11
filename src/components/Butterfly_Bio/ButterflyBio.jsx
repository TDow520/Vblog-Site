import React from "react";
import "./Butterfly.css";
import Nav from "../Homepage/nav";
import Butterfly_Body from "./components/ButterflyBody";
import Copyright from "../Homepage/copyright";

function ButterflyBio() {
    return (
        <div className="flex flex-col justify-center border border-red-800 bg-green-200">
            <Nav />
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl font-bold text-center text-gray-700">
                    Butterfly Bio
                </h1>
            </div>
            <div className="flex w-xl border left-3 justify-center h-[82.5vh]">
                <Butterfly_Body />
            </div>
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default ButterflyBio;
