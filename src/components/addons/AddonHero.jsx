import React from 'react'

function AddonHero() {
    return (
        <div className="relative mx-auto pt-15 bgimg p-5">
            <h1 className='text-4xl text-primary-500 text-center font-extrabold font-code'>Addons</h1>
            <h2 className='text-xl text-gray-300 text-center'>Increase your 0xbot capabilities with <strong>addons</strong>, also refered as Modules.</h2>

            <div className="flex flex-wrap justify-center gap-5">
                <a href="https://store.smartshub.dev" type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-puzzle"></i> Browse BuiltByBit account</a>
                <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-book"></i> Documentation</a>
                <a href="https://discord.smartshub.dev" type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i class="bi bi-headset"></i> Support</a>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,255,106,1)50%,rgba(0,0,0,1)100%)]"></div>
        </div>
    )
}

export default AddonHero