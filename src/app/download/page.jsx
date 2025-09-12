"use client";
import React, { useEffect, useState } from "react";

function Page() {
    const [seconds, setSeconds] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            window.location.href =
                "https://builtbybit.com/resources/0xbot-next-generation-modular-bot.76821/";
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">
            <p className="text-xl font-semibold">Redirecting in {seconds}...</p>
            <div className="border rounded-xl border-primary-500 bg-primary-950 px-5 py-2.5 mt-5">
                <p className="text-lg text-primary-500">Please leave a review</p>
                <p>If you find this bot useful, or your support was great, don't hestiate in leaving a 5-star review! We will appreciate it.</p>
            </div>
        </div>
    );
}

export default Page;
