import React from "react";

export default function Vcard(props) {
    return (
        <div className="w-[15%] mx-[2.5%] my-[1%] border text-lg bg-gray-300 rounded-md text">
            this is a card for the videos in the library
            <div>
                add the video link here:
                <div>
                    <a href={props.videoLink} className= "text-blue-500 underline hover:no-underline">
                        {props.videoLink}
                    </a>
                </div>
            </div>
        </div>
    );
}