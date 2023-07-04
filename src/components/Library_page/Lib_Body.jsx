import React, { useState, useRef, useEffect } from "react";
import Vcard from "./video_card";

export default function Body() {
    const vids = []
    for (let i = 0; i < 10; i++) {
        vids.push(<Vcard key={i} />)
    }
    
    return (
        <div className="flex border border-purple-900 justify-center">
            <div>
                {/* this is where a table vidoes goes */}
                <div className="flex flew col flew-wrap border border-purple-400">
                    {vids}
                </div>
            </div>
        </div>
    );
}