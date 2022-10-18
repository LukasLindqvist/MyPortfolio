import React from 'react'
import { useState } from 'react'
import NavLinks from './NavLinks'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

function MobileNavigation() {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiOutlineMenuAlt3 className='hamburger' size='32px' color='white'
    onClick={() => setOpen(!open)}
    />

    const closeIcon = <MdClose className='hamburger' size='32px' color='white'
    onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

  return (
    <nav className='mobileNavBar'>
        {open ? closeIcon : hamburgerIcon }
        {open && <NavLinks isMobile={true}  closeMobileMenu={closeMobileMenu}/>}
    </nav>
  )
}

export default MobileNavigation