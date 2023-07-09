import React, { useState, useRef, useEffect } from "react";
import Vcard from "./video_card";

export default function Body() {
    const vlink = "https://www.youtube.com/embed/5qap5aO4i9A"
    const vids = []
    let i = 0
    while (i < 20) {
        vids.push(<Vcard key={i} videoLink={vlink} />)
        i++
    }
    
    return (
        <div className="flex border border-purple-900 justify-center">
            <div>
                {/* this is where a table vidoes goes */}
                <div className="flex flex-wrap border border-purple-400">
                    {vids}
                </div>
            </div>
        </div>
    );
}