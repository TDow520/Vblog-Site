import React from "react";
import "./HoneeBio.css";
import Copyright from "../Homepage/copyright";
import Honee_Header from "./components/HoneeHeader";

function HoneeBio() {
    return (
        <div className="flex flex-col justify-center border border-red-800 bg-yellow-50 ">
            <Honee_Header />
            <div className="intro flex justify-center border border-yellow-600 w-[75%] mx-[12.5%] text-lg font-semibold h-[82.5vh]">
                Hi everyone. My name is HoneeBee. I am the queen of the blank forest and your host for this website. I am a very busy bee, but I always have time to learn new things. I am very excited to learn about the world of coding and I hope you are too. I hope you enjoy your time here and learn a lot. I know I will.
            </div>
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default HoneeBio;