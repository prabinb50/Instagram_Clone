import React from 'react'
import LeftSide from './components/LeftSide'
import MiddleArea from './components/MiddleArea'
import RightSide from './components/RightSide'

export default function App() {
  return (
    <div className='grid grid-cols-3'>
      <LeftSide></LeftSide>
      <MiddleArea></MiddleArea>
      <RightSide></RightSide>
    </div>
  )
}
