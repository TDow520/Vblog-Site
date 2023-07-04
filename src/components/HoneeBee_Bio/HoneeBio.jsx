import React from "react";
import "./HoneeBio.css";
import Copyright from "../Homepage/copyright";
import Honee_Header from "./components/HoneeHeader";

function HoneeBio() {
    return (
        <div className="flex flex-col justify-center border border-red-800">
            <Honee_Header />
            <footer className="text-center">
                <Copyright />
            </footer>
        </div>
    );
}

export default HoneeBio;