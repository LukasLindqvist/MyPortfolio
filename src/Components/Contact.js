import React from 'react'
import gitHub from './Images/GitHubLogo.svg'
import linkedIn from './Images/LinkedIn.svg'
import CV from '../CV.docx'
function Contact() {
  return (
    <div className='contact' id='contact'>
        <h2>Contact</h2>
        <div className='links'>
            <p>Get in touch with me down below,</p>
            <p>I'll get back to you as soon as possible! </p>
            <a href="mailto:Lukas-Lindqvist@hotmail.com">Say Hello</a>
            <a href={CV} download="Lukas Lindqvist CV">Download CV</a>
        </div>
        <div className='socials'>
            <a href='https://www.linkedin.com/in/lukas-lindqvist-81a78b250/' target="_blank">
              <img src={linkedIn} alt='Linkedin' id='linkedIn'></img>
            </a>
            <a href='https://github.com/LukasLindqvist' target="_blank">
              <img src={gitHub} alt='GitHub' id='gitHub'></img>
            </a>
        </div>
    </div>
  )
}

export default Contact