import React from 'react'
import PublishAddonModal from "./PublishAddonModal";
function AddonHero() {
    return (
        <div className="relative mx-auto pt-15 p-5">
            <h1 className='text-4xl text-primary-500 text-center font-extrabold font-code'>0xBot Addon browser</h1>
            <h2 className='text-xl text-gray-100 text-center'>Increase your 0xbot capabilities with <strong>addons</strong>, also refered as Modules.</h2>

            <div className="flex flex-wrap justify-center gap-5 pt-10">
                <a href="/" type="button" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-house"></i> Home</a>
                <a type="https://docs.smartshub.dev/0xbot/introduction" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-book"></i> Documentation</a>
                <a href="https://discord.smartshub.dev" type="button" className="w-64 rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-headset"></i> Support</a>
            </div>


            <div className="mx-auto flex items-center gap-3 w-[600px] h-14 mt-16">
                <PublishAddonModal />
            </div>
        </div>
    )
}

export default AddonHero