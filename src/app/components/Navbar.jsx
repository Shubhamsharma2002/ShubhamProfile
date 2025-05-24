import React from 'react'

const Navbar =()=> {
  return (
    <div className='text-white bg-amber-300 p-5 items-center flex justify-around'>
      <div className="font-bold italic text-4xl">Shubham</div>
      <div className="flex gap-4 cursor-pointer">
        <p>Intro</p>
        <p>Skills</p>
        <p>project</p>
        <p>education</p>
      </div>
    </div>
  )
}

export default Navbar