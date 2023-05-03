import React, { useState } from "react";

function Copyright() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <div className="footer">
            <p>© {year} - vblog</p>
        </div>
    );
}

export default Copyright;