import React from 'react'

function Registerskeleton() {
  return (
    <div className="flex flex-col ring-1 ring-gray-200 rounded shadow px-3 py-10 gap-5 w-80 animate-pulse">
        <div className="flex justify-center"><h2 className="h-7 rounded bg-gray-200 w-40"></h2></div>
        <div className="flex justify-center w-full bg-gray-200 h-10 rounded mx-auto"></div>
        <div className="flex justify-center w-full bg-gray-200 h-10 rounded mx-auto"></div>
        <div className="flex justify-center w-full bg-gray-200 h-10 rounded mx-auto"></div>
        <div className="flex justify-center w-full bg-gray-200 h-10 rounded mx-auto"></div>
        <div className="flex justify-between gap-10">
        <div className="flex justify-center flex-1 bg-gray-200 h-5 rounded mx-auto"></div>
        <div className="flex justify-center flex-1 bg-gray-200 h-5 rounded mx-auto"></div>
        </div>
        <div className="flex justify-center w-64 bg-gray-200 h-10 rounded mx-auto"></div>
      </div>
  )
}

export default Registerskeleton
