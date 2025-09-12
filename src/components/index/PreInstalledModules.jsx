import React from 'react'

function PreInstalledModules() {
    return (
        <section className="mx-5">
            <div className="mx-auto max-w-[1080px] my-10 bg-[linear-gradient(230deg,#000000_0%,#022409_100%)] p-10 rounded-xl">
                <div>
                    <p className='text-xs text-gray-500'>MODULES</p>
                    <h2 className='text-3xl font-bold text-primary-500'>Pre-installed modules</h2>
                </div>


                <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <h3 className='mb-3 text-2xl font-bold text-primary-500'>Embeds <span className="rounded-full bg-primary-950 px-3 py-1 text-sm font-semibold text-primary-500"> From 1.1.0 </span></h3>
                        <p className='text-md text-gray-100 font-bold'>Send fully customizable embeds to your server channels</p>
                        <ul className='mx-8 list-disc'>
                            <li className='my-4'><strong>Button based</strong> - Stop using boring configuration files. Create embeds within seconds</li>
                            <li className='my-4'><strong>Super customizable</strong> - Create embed with all its features. Just if it was hard-coded. Customize everything, from the color to the timestamp.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-3 text-2xl font-bold text-primary-500'>Leveling system</h3>
                        <p className='text-md text-gray-100 font-bold'>Boost your channels by awarding the users when writting on them</p>
                        <ul className='mx-8 list-disc'>
                            <li className='my-4'><strong>Superior performance</strong> - Can handle thousands of messages per minute, designed for very large servers.</li>
                            <li className='my-4'><strong>Simple configuration</strong> - No need of extremely advanced configuration skills. Just to know how to read.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-3 text-2xl font-bold text-primary-500'>Moderation</h3>
                        <p className='text-md text-gray-100 font-bold'>Simple and easy to use moderation system, with features sch as warn, mute, or ban.</p>
                        <ul className='mx-8 list-disc'>
                            <li className='my-4'><strong>Extended features</strong> - Alongside with the default discord features such as mute or ban, we add other features like warnings.</li>
                            <li className='my-4'><strong>Easy to use and manage</strong> - Designed for confort. Simple commands makes your bot a functional moderation hub.</li>
                        </ul>
                    </div>
                    <div className='rounded-xl border border-dashed border-primary-500 p-5 flex flex-col justify-center items-center'>
                        <h3 className='mb-3 text-2xl font-bold text-primary-500'>Much more addons</h3>
                        <p className='text-md text-gray-100 font-bold'>Visit the <a href="https://builtbybit.com/resources/0xbot-next-generation-modular-bot.76821/" className='text-primary-500 hover:text-primary-700 hover:cursor-pointer'>product page <i className="bi bi-box-arrow-up-right"></i> </a> to see more features.</p>
                    </div>
                    




                </div>

            </div>
        </section>
    )
}

export default PreInstalledModules