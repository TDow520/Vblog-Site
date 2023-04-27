import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <div className="bg-gradient-to-t from-white from-10% to-black">
                <Nav />
                <div className="flex justify-evenly max-h-42">
                    <img
                        src="/Warrior_HoneeBee.JPEG"
                        className="App-logo mb-3.5 w-1/5"
                        alt="HoneeBee_Warrior"
                    />
                    <h1 className="font-semibold lg:text-8xl text-slate-200">
                        Butterfly and Bee
                    </h1>
                    <img
                        src="/Butterfly_majestic.JPEG"
                        className="App-logo mb-3.5 w-1/5"
                        alt="Butterfly_majestic"
                    />
                </div>
            </div>

            <Main />

            <Summary />
            <footer className="text-center m-10">
                <Copyright />
            </footer>
        </>
    );
}


function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuClick() {
        setShowMenu(!showMenu);
    }
    return (
        <header className="flex justify-between ">
            <button
                type="submit"
                className="rounded-lg bg-gray-900 p-1.5 m-3.5 text-slate-200 font-medium"
                onClick={ClickDark}
            >
                Dark Mode
            </button>
            <div className="flex justify-between w-375 text-slate-100">
                <nav className="container flex justify-between">
                    <a href="#" className="font-semibold px-1.5 m-3.5 w-20">
                        Buttterfly Bio
                    </a>
                    <a href="#" className="font-semibold px-1.5 m-3.5">
                        HoneeBee Bio
                    </a>
                    <nav className="container flex justify-between px-1.5 mt-6">
                        <div
                            className={`${
                                showMenu ? "block" : "hidden"
                            } space-x-8 xl:flex`}
                        >
                            <a href="#" className="hover:font-bold">
                                Home
                            </a>
                            <a href="#" className="hover:font-bold">
                                Sign-in
                            </a>
                            <a href="#" className="hover:font-bold">
                                Contact
                            </a>
                            <a href="#" className="hover:font-bold">
                                Help
                            </a>
                        </div>
                        <button
                            id="hamburger"
                            className={`flex sm:hidden ${
                                showMenu ? "animate-x-to-close" : ""
                            }`}
                            onClick={handleMenuClick}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </nav>
                </nav>
            </div>
        </header>
    );
}

function Main() {
    return (
        <>
            <main className="flex-row justify-center mx-auto min-h-fit p-1.5">
                <h2 className="text-center font-bold text-5xl m-4">
                    Now Playing
                </h2>
                <section className="flex justify-center">
                    <MainVideo src="/KH_1_playthrough_(16_Final_Episode).mp4" />
                </section>
                <section className="bg-gradient-to-t from-white via-green-900 to-white h-fit">
                    <h2>Recent Videos</h2>
                    <div className="lg:flex justify-between h-55">
                        <VideoPlayer
                            src="/KH_1_playthrough_(16_Final_Episode).mp4"
                            text={
                                "Butterfly and Bee are two friends who love to play"
                            }
                        />
                        <VideoPlayer src="/KH_1_playthrough_(16_Final_Episode).mp4" />
                        <VideoPlayer src="/KH_1_playthrough_(16_Final_Episode).mp4" />
                    </div>
                </section>
            </main>
        </>
    );
}

function Summary() {
    return (
        <>
            <section className="flex-row text-center">
                <h2 className="underline font-extrabold text-5xl m-5">
                    Summary
                </h2>
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

function Copyright() {
    let today = new Date();
    let year = today.getFullYear();
    return (
        <div className="footer">
            <p>© {year} - vblog</p>
        </div>
    );
}

function ClickDark() {
    console.log("Dark Mode");
}

function VideoPlayer({ src, text }) {
    const [playing, setPlaying] = useState(false);
    const [videoIcon, setvideoIcon] = useState("/playButton.png");
    const [altText, setAltText] = useState("Play");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    //calculate current time displayed as minutes: and two digit seconds
    //minutes dont go over 59
    let minutes = ("0" + (Math.floor(currentTime / 60) % 60)).slice(-2);
    //displayed as a two digit number
    let seconds = ("0" + Math.floor(currentTime % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600)).slice(-2);

    //calculate time remaining displayed as minutes: and two digit seconds
    let timeRemaining = Math.floor(duration - currentTime);

    const videoRef = useRef(null);

    //toggle between play and pause
    const toggleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
            setvideoIcon("/playButton.png");
            setAltText("Play");
        } else {
            videoRef.current.play();
            setPlaying(true);
            setvideoIcon("/pauseButton.png");
            setAltText("Pause");
        }
    };

    //method to stop video
    const stopVideo = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPlaying(false);
        setvideoIcon("/playButton.png");
        setAltText("Play");
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const handleScrub = (e) => {
        const scrubTime = (e.target.value / 100) * duration;
        videoRef.current.currentTime = scrubTime;
        setCurrentTime(scrubTime);
    };

    const toggleFullScreen = () => {
            videoRef.current.requestFullscreen();
    };

    return (
        <div className="p-10">
            <video
                className="rounded-lg"
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="flex justify-between items-center">
                <button onClick={toggleVideo}>
                    <img className="h-16" src={videoIcon} alt={altText} />
                </button>
                <p>
                    {hours}:{minutes}:{seconds}
                </p>
                <div className="w-4/5 p-1.5">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleScrub}
                        className="w-full"
                    />
                </div>
                <p>
                    {Math.floor(timeRemaining / 3600)}:
                    {(
                        "0" +
                        (Math.floor(timeRemaining / 60) -
                            Math.floor((timeRemaining / 3600) % 60) * 60)
                    ).slice(-2)}
                    :{("0" + Math.floor(timeRemaining % 60)).slice(-2)}
                </p>
                <button onClick={stopVideo}>
                    <img className="h-12" src="/stopButton.png" alt="Stop" />
                </button>
                <button onClick={toggleFullScreen}>
                    <img className="h-12" src= "/full-screen-icon.png" alt="Fullscreen"/>
                </button>
            </div>
            <p>{text}</p>
        </div>
    );
}

function MainVideo({src, text }) {
    const [playing, setPlaying] = useState(false);
    const [videoIcon, setvideoIcon] = useState("/playButton.png");
    const [altText, setAltText] = useState("Play");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    //calculate current time displayed as minutes: and two digit seconds
    //minutes dont go over 59
    let minutes = ("0" + (Math.floor(currentTime / 60) % 60)).slice(-2);
    //displayed as a two digit number
    let seconds = ("0" + Math.floor(currentTime % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600)).slice(-2);

    //calculate time remaining displayed as minutes: and two digit seconds
    let timeRemaining = Math.floor(duration - currentTime);

    const videoRef = useRef(null);

    //toggle between play and pause
    const toggleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
            setvideoIcon("/playButton.png");
            setAltText("Play");
        } else {
            videoRef.current.play();
            setPlaying(true);
            setvideoIcon("/pauseButton.png");
            setAltText("Pause");
        }
    };

    //method to stop video
    const stopVideo = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPlaying(false);
        setvideoIcon("/playButton.png");
        setAltText("Play");
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const handleScrub = (e) => {
        const scrubTime = (e.target.value / 100) * duration;
        videoRef.current.currentTime = scrubTime;
        setCurrentTime(scrubTime);
    };

    const toggleFullScreen = () => {
            videoRef.current.requestFullscreen();
    };

    return (
        <div className="p-10">
            <video
                className="rounded-lg"
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="flex justify-between items-center">
                <button onClick={toggleVideo}>
                    <img className="h-16" src={videoIcon} alt={altText} />
                </button>
                <p>
                    {hours}:{minutes}:{seconds}
                </p>
                <div className="w-4/5 p-1.5">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleScrub}
                        className="w-full"
                    />
                </div>
                <p>
                    {Math.floor(timeRemaining / 3600)}:
                    {("0" + (Math.floor(timeRemaining / 60) - Math.floor((timeRemaining / 3600) % 60) * 60)).slice(-2)}:
                    {("0" + Math.floor(timeRemaining % 60)).slice(-2)}
                </p>
                <button onClick={stopVideo}>
                    <img className="h-12" src="/stopButton.png" alt="Stop" />
                </button>
                <button onClick={toggleFullScreen}>
                    <img className="h-12" src= "/full-screen-icon.png" alt="Fullscreen"/>
                </button>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default App;
