import React from "react";
import Copyright from "../../Homepage/copyright";
import { useState } from "react";

export default function ContactBody() {
    const [name, setName] = useState(["HoneeBee", "Butterfly"]);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleEmail(event) {
        const name = event.target.value;
        if (name === "HoneeBee") {
            setEmail("courtneedow@gmail.com");
        } else if (name === "Butterfly") {
            setEmail("writatee@gmail.com");
        }
    };
    
    function handleSubjectChange(event) {
        setSubject(event.target.value);
    };

    function handleMessageChange(event) {
        setMessage(event.target.value);
    };
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(email); // Print the email value to the console
        // Use the email value here to send the email
    };

    return (
        <div>
            <div className="flex flex-col border border-black pb-[15%]">
                <div className="flex justify-center text-2xl">
                    Thank you for visting our Forest. We are happy that you
                    stopped by. If you have any thoughts that you would like to
                    leave with us please drop a message to either Butterfly or
                    myself. We look forward to hearing from you all and we hope
                    that you enjoy your stay.
                    <br />
                    P.S. Stay away from the buttterflies unless you have a wish
                    to be eaten.
                </div>
                {/* create a form that will email honeebee or butterfly */}
                {/* insert a dropdown with HoneeBee or Butterfly as the options */}

                <form
                    className="flex flex-col justify-center w-[20%] p-2 mx-[40%] bg-slate-400 rounded-lg shadow-lg shadow-slate-500"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <select
                            className="my-[1.5%] bg-slate-300 ml-2 w-[96.5%] rounded-md"
                            onChange={handleEmail}
                        >
                            <option disabled selected>
                                Select the person you would like to contact
                            </option>
                            {name.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="User Name"
                        className="m-[2%]"
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="User Email"
                        className="m-[2%]"
                    />
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="m-[2%]"
                        value={subject}
                        onChange={handleSubjectChange}
                    
                    />

                    <textarea
                        name="message"
                        id="message"
                        className="m-[2%]"
                        placeholder="Message"
                        rows="15"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-slate-300 w-[15%] items-center rounded-md mx-[42.5%] mb-[2.5%]"
                    >
                        <a href={`mailto:${email}?subject:${subject}&body:${message}`}></a>
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex justify-center">
                <Copyright />
            </div>
        </div>
    );
}