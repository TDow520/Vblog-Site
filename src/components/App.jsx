import React from "react";
import "../css/App.css";
import Home from "./Homepage/home.jsx";
import VideoLib from "./Library_page/vid_lib.jsx";

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
