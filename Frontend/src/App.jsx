import React from 'react'
import LeftSide from './components/LeftSide'
import MiddleArea from './components/MiddleArea'
import RightSide from './components/RightSide'
import MobileMenu from './components/MobileMenu'

export default function App() {
  return (
    <div>
      <div className="relative flex h-screen">
        <div className="sticky top-0 h-screen w-3/12 lg:w-2/12 hidden sm:block border-r border-gray-300">
          <LeftSide />
        </div>

        <div className="overflow-y-auto h-screen w-12/12 sm:w-9/12 lg:w-6/12">
          <MiddleArea />
        </div>

        <div className="sticky top-0 h-screen bg-gray-50 w-3/12 lg:w-4/12 hidden lg:block">
          <RightSide />
        </div>
      </div>

      <MobileMenu></MobileMenu>
    </div>

  )
}
