"use client";
import React from 'react'

function QuickSetup() {
    return (
        <section>
            <div className="mx-auto max-w-[1020px] mt-20 px-5">
                <div>
                    <p className='text-xs text-gray-500'>QUICK SETUP GUIDE</p>
                    <h2 className='text-3xl font-bold text-primary-500'>Start right now</h2>
                </div>


                <div className="mx-auto mt-5 max-w-[400px]">
                    <p className='text-xs text-gray-500'>Step 1</p>
                    <p className='mb-2'>Download the bot from <a href="/download" className='text-primary-500 hover:text-primary-700 hover:cursor-pointer'>BuiltByBit</a></p>
                </div>

                <div className="mx-auto mt-5 max-w-[400px]">
                    <p className='text-xs text-gray-500'>Step 2</p>
                    <p className='mb-2'>Create a discord bot & grab the token</p>
                </div>

                <div className="mx-auto mt-5 max-w-[400px]">
                    <p className='text-xs text-gray-500'>Step 3</p>
                    <p className='mb-2'>Set the token in <span className='code'>/config/token.json</span></p>
                </div>

                <div className="mx-auto mt-5 max-w-[400px]">
                    <p className='text-xs text-gray-500'>Step 4</p>
                    <p className='mb-2'>Set the <span className="code">clientId</span> & <span className="code">guildId</span></p>
                </div>

                <div className="mx-auto mt-5 max-w-[400px]">
                    <p className='text-xs text-gray-500'>Step 5</p>
                    <p className='mb-2'>Start the bot</p>
                </div>

                <div className="mx-auto mt-10 max-w-[400px]">
                    <button onClick={() => {location.href='https://docs.smartshub.dev/0xbot/introduction'}} type="button" className="w-full rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-book"></i> See docs</button>

                </div>

                

            </div>
        </section>
    )
}

export default QuickSetup