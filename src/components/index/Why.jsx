import React from 'react'

function Why() {
    return (
        <div className='mx-auto lg:w-[50%] w-[95%] my-5 mt-10'>
            <h2 className='text-3xl text-primary-500 text-center font-extrabold'>Why to use 0xBot?</h2>
            <div class="mx-auto">
                <div class="divide-y divide-gray-100">
                    <details class="group" open>
                        <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-primary-500">
                            Modularity
                            <div class="text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </summary>
                        <div class="pb-4 text-gray-100">0xBot offers a fully modular concept, meaning you can select and customize the features of the bot. This opens a world of new possibilities of bots, and makes yours unique</div>
                    </details>
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-primary-500">
                            Active development
                            <div class="text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </summary>
                        <div class="pb-4 text-gray-100">We are constantly releasing new updates or modules for 0xBot to avoid any kind of software problem, and bring to the users the latest features available.</div>
                    </details>
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-primary-500">
                            Free and proffesional support
                            <div class="text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </summary>
                        <div class="pb-4 text-gray-100">Struggling? No problem, we got you. Just open a ticket in our discord server and any admin will be with you soon. We offer experience administrators to provide fast and reliable support</div>
                    </details>
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-primary-500">
                            Easy setup, low requirements
                            <div class="text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </summary>
                        <div class="pb-4 text-gray-100">Easy to setup and start running. The bot does not require much dependencies, only Nodejs and NPM. You can also use the <strong>Instant Deploy</strong> feature we offer to setup instantly, without hard configurations or hosting troubles. All in a few clicks</div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Why