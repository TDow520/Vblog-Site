import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuClick() {
        setShowMenu(!showMenu);
    }
    return (
        <header className="flex justify-between ">
            <button
                type="submit"
                className="dark_btn rounded-lg bg-gray-900 p-1.5 m-3.5  text-slate-200 font-medium hidden"
                onClick={ClickDark}
            >
                Dark Mode
            </button>
            <div className="flex justify-between w-375 text-slate-100">
                <nav className="container flex justify-between px-1.5 mt-6 mb-6 mr-5 bg-gray-500 shadow-lg shadow-gray-400 rounded-2xl text-slate-300 hover:text-slate-100">
                    <div className="hidden lg:flex">
                        {/* <a href="#" className="hover:font-bold px-1.5 m-3.5">
                            Sign-in
                        </a> */}
                        <a href="/" className="hover:font-bold px-1.5 m-3.5">
                            Home
                        </a>
                        <a
                            href="/butterfly"
                            className="hover:font-bold px-1.5 m-3.5"
                        >
                            Buttterfly Bio
                        </a>
                        <a
                            href="/honee"
                            className="hover:font-bold px-1.5 m-3.5"
                        >
                            HoneeBee Bio
                        </a>
                        <a
                            href="/library"
                            className="hover:font-bold px-1.5 m-3.5"
                        >
                            Video Lib
                        </a>
                        <a href="#" className="hover:font-bold px-1.5 m-3.5">
                            Contact
                        </a>
                    </div>
                    <div
                        className="px-1 m-2 lg:hidden"
                        onClick={handleMenuClick}
                    >
                        {!showMenu ? (
                            <AiOutlineMenu size={20} />
                        ) : (
                            <AiOutlineClose size={20} />
                        )}
                    </div>
                    <div
                        className={
                            showMenu
                                ? "fixed left-[.05%] top-[55px] w-[60%] h-full border-l border-l-gray-900 bg-gray-500 shadow-lg shadow-white rounded-[2%] ease-in-out duration-500 z-[1]"
                                : "fixed left-[-90%]"
                        }
                    >
                        <ul className="uppercase p-10">
                            {/* <li className="p-4 border-b border-gray-700 hover:font-bold">
                                <Link to ={`/`}>Sign-in</Link>
                            </li> */}
                            <li className="p-4 border-b border-gray-700 hover:font-bold hover:text-slate-100">
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li className="p-4 border-b border-gray-700 hover:font-bold hover:text-slate-100">
                                <Link to={`/butterfly`}>Butterfly Bio</Link>
                            </li>
                            <li className="p-4 border-b border-gray-700 hover:font-bold hover:text-slate-100">
                                <Link to={`/honee`}>HoneeBee Bio</Link>
                            </li>
                            <li className="p-4 border-b border-gray-700 hover:font-bold hover:text-slate-100">
                                <Link to={`/library`}>Video Library</Link>
                            </li>
                            <li className="p-4 hover:font-bold">
                                <Link to={`/library`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function ClickDark() {
    console.log("Dark Mode");
}

export default Nav;