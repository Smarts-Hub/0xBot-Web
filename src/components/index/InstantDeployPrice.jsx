import React from 'react'

function InstantDeployPrice() {
    return (
        <div className='mx-auto w-[90%] my-5 mt-10' id='instant-deploy'>
            <h2 className='text-3xl text-primary-500 text-center font-extrabold'>Instant deploy prices</h2>
            <p className='text-xl text-gray-300 text-center'>Single-click deployment, 99.999% uptime.</p>
            <div className='flex flex-wrap justify-center gap-4 mt-5'>
                <div className='border rounded-2xl border-gray-800 w-80 p-5'>
                    <h2 className='text-xl text-primary-500'>Free <i className="bi bi-info-circle text-gray-700" x-data="{ tooltip: 'Recommended for testing. Not 24/7' }" x-tooltip="tooltip"></i></h2>
                    <p className='text-md text-gray-100'>0.0000$ / Hour</p>
                    <hr className='mt-10 border-gray-800 ' />
                    <ul className='my-5 text-gray-300'>
                        <li><i className="bi bi-memory text-primary-500"></i> 64 MB Ram</li>
                        <li><i class="bi bi-cpu text-primary-500"></i> 0.25 vCores</li>
                        <li><i className="bi bi-device-hdd text-primary-500"></i> 1GB SSD</li>
                        <li><i className="bi bi-puzzle text-primary-500"></i> 3 Addons</li>
                        <li><i className="bi bi-clock text-gray-700"></i> 99.999% Uptime</li>
                        <li><i className="bi bi-arrow-clockwise text-gray-700"></i> Automatic software update</li>
                        <li><i className="bi bi-archive text-gray-700"></i> Access previews</li>
                        <li><i className="bi bi-upload text-gray-700"></i> Upload via SFTP</li>
                        <li><i className="bi bi-database-lock text-gray-700"></i> Private encrypted database</li>
                        <li><i className="bi bi-tag text-gray-700"></i> 50%-off on premium addons</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-cloud-plus"></i> Deploy now</a>
                        <span className="px-2 py-1 rounded-full bg-red-950 text-xs font-bold text-red-500">Out of stock</span>
                    </div>

                </div>
                <div className='border rounded-2xl border-primary-500 w-80 p-5'>
                    <h2 className='text-xl text-primary-500'>1$ Month <i className="bi bi-info-circle text-gray-700" x-data="{ tooltip: 'Recommended for most discord servers' }" x-tooltip="tooltip"></i> <span className="px-2 py-1 rounded-full bg-primary-950 text-xs font-bold text-primary-500">Most popular!</span></h2>
                    <p className='text-md text-gray-100'>0.0014$ / Hour</p>
                    <hr className='mt-10 border-gray-800' />
                    <ul className='my-5 text-gray-300'>
                        <li><i className="bi bi-memory text-primary-500"></i> 256 MB Ram</li>
                        <li><i class="bi bi-cpu text-primary-500"></i> 0.75 vCores</li>
                        <li><i className="bi bi-device-hdd text-primary-500"></i> 15GB Ultrafast SSD</li>
                        <li><i className="bi bi-puzzle text-primary-500"></i> 20 Addons</li>
                        <li><i className="bi bi-clock text-primary-500"></i> 99.999% Uptime</li>
                        <li><i className="bi bi-arrow-clockwise text-primary-500"></i> Automatic software update</li>
                        <li><i className="bi bi-archive text-primary-500"></i> Access previews</li>
                        <li><i className="bi bi-upload text-primary-500"></i> Upload via SFTP</li>
                        <li><i className="bi bi-database-lock text-primary-500"></i> Private encrypted database</li>
                        <li><i className="bi bi-tag text-gray-700"></i> 50%-off on premium addons</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-cloud-plus"></i> Deploy now</a>
                        {/* <span className="px-2 py-1 rounded-full bg-primary-950 text-xs font-bold text-primary-500">200 instances available</span> */}
                    </div>
                </div>
                <div className='border rounded-2xl border-gray-800 w-80 p-5'>
                    <h2 className='text-xl text-primary-500'>3$ Month <i className="bi bi-info-circle text-gray-700" x-data="{ tooltip: 'Recommended for large discord servers' }" x-tooltip="tooltip"></i></h2>
                    <p className='text-md text-gray-100'>0.0042$ / Hour</p>
                    <hr className='mt-10 border-gray-800' />
                    <ul className='my-5 text-gray-300'>
                        <li><i className="bi bi-memory text-primary-500"></i> 1024 MB Ram</li>
                        <li><i class="bi bi-cpu text-primary-500"></i> 1.50 vCores</li>
                        <li><i className="bi bi-device-hdd text-primary-500"></i> 30GB Ultrafast SSD</li>
                        <li><i className="bi bi-puzzle text-primary-500"></i> Unlimited addons</li>
                        <li><i className="bi bi-clock text-primary-500"></i> 99.999% Uptime</li>
                        <li><i className="bi bi-arrow-clockwise text-primary-500"></i> Automatic software update</li>
                        <li><i className="bi bi-archive text-primary-500"></i> Access previews</li>
                        <li><i className="bi bi-upload text-primary-500"></i> Upload via SFTP</li>
                        <li><i className="bi bi-database-lock text-primary-500"></i> Private encrypted database</li>
                        <li><i className="bi bi-tag text-primary-500"></i> 50%-off on premium addons</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <a type="button" className="rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400"><i className="bi bi-cloud-plus"></i> Deploy now</a>
                        {/* <span className="px-2 py-1 rounded-full bg-primary-950 text-xs font-bold text-primary-500">200 instances available</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstantDeployPrice