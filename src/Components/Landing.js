import React from 'react'
/* car img imports */
import redCar from './Images/f1Red.png'
import blueCar from './Images/f1Blue.png'
import greenCar from './Images/f1Green.png'
import yellowCar from './Images/f1Yellow.png'
import pinkCar from './Images/f1Pink.png'
import myFace from './Images/ProfilePicture.JPG'

import Typewriter from 'typewriter-effect';

function Landing() {
  return (
    <>
    <div className='landing' id='landing'>
      <div className='myFace'>
        <img src={myFace} alt='me face'></img>
      </div>
      <div className='helloMsg'>
        <h2>Hello I'm Lukas,</h2>
        <h2>
        <Typewriter
          options={{
            strings: ['Front-End Developer', 'Sports Fan', ''],
            autoStart: true,
            loop: true, 
          }}
          />
          </h2>
      </div>
      <div className='diagonal-line'>
        {/* Top cars */}
        <img src={redCar} alt='car' id='topCar1'></img>
        <img src={blueCar} alt='car' id='topCar2'></img>
        <img src={greenCar} alt='car' id='topCar3'></img>
        <img src={yellowCar} alt='car' id='topCar4'></img>
        <img src={pinkCar} alt='car' id='topCar5'></img>
        <img src={redCar} alt='car' id='topCar6'></img>
        <img src={greenCar} alt='car' id='topCar7'></img>
        <img src={yellowCar} alt='car' id='topCar8'></img>
        {/* Bottom cars */}
        <div className='bottom-car'>
          <img src={yellowCar} alt='car' id='bottomCar1'></img>
          <img src={pinkCar} alt='car' id='bottomCar2'></img>
          <img src={redCar} alt='car' id='bottomCar3'></img>
          <img src={blueCar} alt='car' id='bottomCar4'></img>
          <img src={pinkCar} alt='car' id='bottomCar5'></img>
          <img src={blueCar} alt='car' id='bottomCar6'></img>
          <img src={redCar} alt='car' id='bottomCar7'></img>
          <img src={greenCar} alt='car' id='bottomCar8'></img>
        </div>
        <div className='middle-line'></div>
      </div>
    </div>
    </>
  )
}

export default Landing