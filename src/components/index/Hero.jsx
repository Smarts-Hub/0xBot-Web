import React from 'react'

function Hero() {
    return (
        <div className="relative mx-auto pt-15 bgimg p-5">
            <h1 className='text-4xl text-primary-500 text-center font-extrabold font-code'>0xBot</h1>
            <h2 className='text-xl text-gray-300 text-center'>Next generation modular discord bot.</h2>

            <div className="flex flex-wrap items-center justify-center">
                <div>
                    <img src="/0xbot.png" alt="0xBot" className='h-140 w-auto' />
                </div>
                <div className='w-1/4'>
                    <h2 className='text-3xl text-primary-500 text-center font-extrabold font-code'>Updates</h2>
                    <div className='h-90'>
                        <p className='text-lg text-gray-400'>Version: 1.0.0</p>
                        <p className='text-xl text-gray-100 font-bold'>Release!</p>
                        <p className='text-lg text-gray-100'>
                            Here it is. Now the bot is available to everyone, and here is a sum of all the features it includes
                        </p>
                        <ul className='my-5'>
                            <li><strong>Complex addon system</strong> - Increase your bot features by adding modules</li>
                            <li><strong>Higly customizable</strong> - Customize the bot to meet your server requirements</li>
                            <li><strong>Super optimized</strong> - It can run everywhere, even in a potato!</li>
                        </ul>
                        <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"> Download on BuiltByBit <i className="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                <a href="#instant-deploy" type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-database-add"></i> Instant deploy</a>
                <a href="/addons" type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-puzzle"></i> Browse addons</a>
                <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-book"></i> Documentation</a>
                <a href="https://discord.smartshub.dev" type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i class="bi bi-headset"></i> Support</a>
            </div>

            {/* Borde degradado */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,255,106,1)50%,rgba(0,0,0,1)100%)]"></div>
        </div>
    )
}

export default Hero