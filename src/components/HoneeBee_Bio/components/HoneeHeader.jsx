import React from "react";
import Nav from "../../Homepage/nav.jsx";

function Honee_Header() {
    return(
        <div>
            <div className="border-x-yellow-600">
                <Nav />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center text-gray-700">
                    HoneeBee Bio
                </h1>

            </div>
        </div>
    );
}

export default Honee_Header;