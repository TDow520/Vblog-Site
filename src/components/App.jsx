import React from "react";
import "../css/App.css";
import Home from "./Homepage/home.jsx";
import VideoLib from "./Library_page/vid_lib.jsx";
import HoneeBio from "./HoneeBee_Bio/HoneeBio.jsx";
import ButterflyBio from "./Butterfly_Bio/ButterflyBio.jsx";
import Contact from "./Contact/contact_main";

import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const routes = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<VideoLib />} />
        <Route path="/honee" element={<HoneeBio />} />
        <Route path="/butterfly" element={<ButterflyBio />} />
        <Route path="/contact" element={<Contact />} />
    </Route>
);

const router = createBrowserRouter(routes);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
