import React from "react";
import MainVideo from "./main_video.jsx";
import VideoPlayer from "./video_player.jsx";

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
                <section className="bg-yellow-200">
                    {/* <section className="bg-gradient-to-t from-white via-green-900 to-white h-fit"> */}
                    <h2>Recent Videos</h2>
                    <div className="2xl:flex justify-between h-55">
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

export default Main;
