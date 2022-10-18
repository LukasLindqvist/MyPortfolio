import React from 'react'
import {motion} from 'framer-motion'

function NavLinks(props) {

    let scrollToView = (divName) => {
        document.getElementById(divName).scrollIntoView({behavior:'smooth'})

        //close navbar after link selection
        props.isMobile && props.closeMobileMenu();
      }

      const animateFrom = {opactiy: 0, y: -40}
      const animateTo = {opactiy: 1, y: 0}
    
  return (
        <ul>
            <motion.li 
            initial={animateFrom}
            animate={animateTo} 
            transition={{delay:0.05}} 
            onClick={() => scrollToView("about")}
            >About</motion.li>

            <motion.li 
            initial={animateFrom} 
            animate={animateTo} 
            transition={{delay:0.10}} 
            onClick={() => scrollToView("works")}
            >Work</motion.li>
            
            <motion.li 
            initial={animateFrom} 
            animate={animateTo} 
            transition={{delay:0.15}} 
            onClick={() => scrollToView("contact")}
            >Contact</motion.li>
        </ul>
  )
}

export default NavLinks