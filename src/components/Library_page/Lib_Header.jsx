import React, {useState, useRef} from "react";
import Nav from "../Homepage/nav.jsx";

export default function Header(){
    return (
        <div className="flex-col">
            <Nav />
            <h1 className="flex border border-red-900 justify-center text-3xl font-bold">
                Forest of Videos
            </h1>
        </div>
    );
}

