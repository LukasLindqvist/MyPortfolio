import React from 'react'

function About() {
  return (
    <div className='about' id='about'>
      <h2>About me</h2>
        <div className='aboutInfo'>
          <div className='infoTxt'>
            <p>Hello! My name is Lukas and I'm an future front end developer currently studying at KYH Stockholm. My interest for web development started years back but finaly decided to take the step to learn this whole shebang after the summer of 2021.</p>
          </div>
            <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        </div>
    </div>
  )
}

export default About