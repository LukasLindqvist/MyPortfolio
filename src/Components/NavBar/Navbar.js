import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


function Navbar() {
  return (
      <div className='navBar'>
          <Navigation/>
          <MobileNavigation/>
      </div>
      
  )
}

export default Navbar