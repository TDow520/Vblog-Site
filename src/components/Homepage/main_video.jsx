import React, {useState, useRef} from "react";
// import Main from "./main_body";

function MainVideo({src, text }) {
    const [playing, setPlaying] = useState(false);
    const [videoIcon, setvideoIcon] = useState("/playButton.png");
    const [altText, setAltText] = useState("Play");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [volume, setVolume] = useState(100);

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
            setvideoIcon("../images/playButton.png");
            setAltText("Play");
        } else {
            videoRef.current.play();
            setPlaying(true);
            setvideoIcon("../images/pauseButton.png");
            setAltText("Pause");
        }
    };

    //method to stop video
    const stopVideo = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPlaying(false);
        setvideoIcon("../images/playButton.png");
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

    // const handleVolume = (e) => {
    //     const newVolume = parseFloat(e.target.value);
    //     setVolume(newVolume);
    //     videoRef.current.volume
    // }

    return (
        <div className="p-10">
            <video
                className="rounded-lg"
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                // volume={volume}
            />
            <div className="flex justify-between items-center">
                <button onClick={toggleVideo}>
                    <img className="h-14 mx-2" src={videoIcon} alt={altText} />
                </button>
                <button onClick={stopVideo}>
                    <img className="h-10 mx-2" src="../images/stopButton.png" alt="Stop" />
                </button>
                <p className="mx-3">
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
                {/* <div className="flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={volume}
                        onChange={handleVolume}
                    />
                    <img
                        className="h-6 ml-2 cursor-auto bg-black mr-5"
                        src="../images/audio_image.png"
                        alt="Volume"
                    />
                </div> */}
                <button onClick={toggleFullScreen}>
                    <img className="h-12 mx-3" src= "../images/full-screen-icon.png" alt="Fullscreen"/>
                </button>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default MainVideo;