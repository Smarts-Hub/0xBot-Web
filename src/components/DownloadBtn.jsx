import React from 'react'

function DownloadBtn() {
  return (
    <a href="/download" className="w-128 text-2xl rounded-xl border border-primary-500 bg-primary-950 px-5 py-2.5 text-center font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 hover:cursor-pointer focus:ring focus:ring-primary-700 disabled:border-primary-700 disabled:bg-primary-950 disabled:text-primary-400">
      <i className="bi bi-download"></i> Download for free
    </a>
  )
}

export default DownloadBtn