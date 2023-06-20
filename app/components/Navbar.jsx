import React from 'react'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-10 border-b-2 px-[6rem] '>
        <h3 className='text-lg font-bold'>Theme</h3>
        <ThemeButton/>
    </nav>
  )
}

export default Navbar