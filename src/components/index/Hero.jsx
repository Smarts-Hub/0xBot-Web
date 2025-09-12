import React from 'react'
import DownloadBtn from '../DownloadBtn'

function Hero() {
    return (
        <div className="relative mx-auto pt-15 bgimg p-5">
            <h1 className='text-6xl text-primary-500 text-center font-extrabold'>0xBot</h1>
            <h2 className='text-xl text-gray-300 text-center'>Next generation modular discord bot.</h2>
            <p className='text-2xl text-primary-500 text-center'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
            <p className='text-sm text-gray-500 text-center'>reviews from builtbybit</p>
            <div>
                <div className="flex flex-wrap items-center justify-center mt-10 mb-10">
                    <DownloadBtn />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div>
                    <img src="/0xbot.png" alt="0xBot" className='h-auto w-[500px]' />
                </div>

            </div>

            <div className="flex flex-wrap justify-center gap-5">
                <a href="/addons" type="button" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-puzzle"></i> Browse addons</a>
                <a type="https://docs.smartshub.dev/0xbot/introduction" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-book"></i> Documentation</a>
                <a href="https://discord.smartshub.dev" type="button" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-headset"></i> Support</a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,255,106,1)50%,rgba(0,0,0,1)100%)]"></div>

            
        </div>
    )
}

export default Hero