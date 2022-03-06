import { UserIcon } from '@heroicons/react/solid'
import React from 'react'

export default function header() {
  return (
    <div className="header flex h-[10%] bg-indigo-400 items-center p-1 justify-end">
      <div className="content-foto flex bg-gray-300 w-12 h-12 rounded-full items-center justify-center overflow-hidden border-2 border-gray-300">
        <UserIcon className="h-12 w-12 text-white relative top-1" />
      </div>
    </div>
  )
}
