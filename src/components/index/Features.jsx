import React from 'react'

function Features() {
    return (
        <section>
            <div className="mx-auto max-w-[1020px] my-10 px-5">
                <div>
                    <p className='text-xs text-gray-500'>FEATURES</p>
                    <h2 className='text-3xl font-bold text-primary-500'>Why use it?</h2>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-code-slash text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Easy to develop</h3>
                        </div>
                        <p className='text-md text-gray-100'>Intuitive and professionals module development features, perfectly documented, allowing everyone to create their own modules.</p>
                    </div>

                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-lightbulb text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Fits your needs</h3>
                        </div>
                        <p className='text-md text-gray-100'>With a large variety of addons, this bot will fit your server needs for sure. Browse between pre-installed addons, explore new ones, or create your own addons.</p>
                    </div>

                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-people text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Community driven</h3>
                        </div>
                        <p className='text-md text-gray-100'>Download addons made by the community, and our partners. If you preffer contributing, you can just upload your addon to BuiltByBit.com and our web portal, then your addon will be part of the community</p>
                    </div>

                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-battery-charging text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Easy installation & setup</h3>
                        </div>
                        <p className='text-md text-gray-100'>Set the bot within minutes and focus on the important, customizing and adding addons to your server.</p>
                    </div>

                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-headset text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Professional support</h3>
                        </div>
                        <p className='text-md text-gray-100'>Get help from our team of experts to resolve any issues you may encounter. Just create a free ticket in our discord and we will be shortly with you.</p>
                    </div>

                    <div>
                        <div className="flex gap-5 items-center mb-2">
                            <div className='bg-primary-950 w-10 h-10 flex items-center justify-center rounded mb-2'>
                                <i className="bi bi-calendar text-primary-500 text-2xl"></i>
                            </div>
                            <h3 className='text-2xl font-bold text-primary-500'>Periodic updates</h3>
                        </div>
                        <p className='text-md text-gray-100'>Stay up to date with the latest features and improvements. Our team is constantly working on new updates to enhance your experience.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Features