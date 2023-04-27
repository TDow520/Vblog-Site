import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <div className=" bg-fuchsia-500 bg-gradient-to-t">
                
                <Nav />
                <div className="flex justify-evenly max-h-42">
                    <img src="../public/Warrior_HoneeBee.JPEG" className="App-logo mb-3.5 w-1/5" alt="HoneeBee_Warrior" />
                    <h1 className="font-semibold lg:text-8xl">Butterfly and Bee</h1>
                    <img src='../public/Butterfly_majestic.JPEG'className="App-logo mb-3.5 w-1/5" alt="Butterfly_majestic" />
                </div>
            </div>

            <Main />

            <Summary />
            <footer>
                <Copyright />
            </footer>
        </>
    );
}

function Copyright() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <div className="footer">
            <p>© {year} - vblog</p>
        </div>
    );
}

function Nav() {
    return (
        <header className="flex justify-between ">
            <button type="submit" className="rounded-lg bg-gray-900 p-1.5 m-3.5 text-slate-200 font-medium" onClick={ClickDark} >Dark Mode</button>
            <div className="flex justify-between w-375">
                <nav className="container flex justify-between">
                            <a href="#" className="font-semibold px-1.5 m-3.5">
                                Buttterfly Bio
                            </a>
                            <a href="#" className="font-semibold px-1.5 m-3.5">
                                HoneeBee Bio
                            </a>
                    <nav className="container flex justify-between px-1.5 mt-6">
                        <div className="hidden space-x-8 xl:flex">
                            <a href="#" className="hover:font-semibold">Home</a>
                            <a href="#">Sign-in</a>
                            <a href="#">Contact</a>
                            <a href="#">Help</a>
                        </div>
                        <div class="flex xl:hidden">
                            <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                            </div>
                        </div>
                    </nav>
                </nav>

            </div>
        </header>
    );
}

function Main() {
    return (
        <>
            <main className="flex-row justify-center mx-auto min-h-fit">
                <h2 className="text-center font-bold text-5xl">Now Playing</h2>
                <section>
                    <video className="lg:h-fit m-auto rounded-xl" src="../public/KH_1_playthrough_(16_Final_Episode).mp4">
                        <source src="../public/KH_1_playthrough_(16_Final_Episode).mp4" type="video/mp4" />
                    </video>
                </section>
                <section className="bg-yellow-500 h-fit">
                    <h2>Recent Videos</h2>
                    <div className="lg:flex justify-between h-55">
                        <video src=""></video>
                        <video src=""></video>
                        <video src=""></video>
                    </div>
                </section>
            </main>
        </>
    );
}

function Summary() {
    return (
        <>
            <section className="flex justify-center">
                <h2>Summary</h2>
                <p>
                    Butterfly and Bee are two friends who love to play video
                    games. They are both very good at the games they play. They
                    are also very good at making videos of their gameplay. They
                    are so good at making videos that they decided to make a
                    website to share their videos with the world. They hope you
                    enjoy their videos.
                </p>
            </section>
        </>
    );
}

function ClickDark(){
    console.log("Dark Mode")
}


export default App;
