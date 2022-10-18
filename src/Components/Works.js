import React from 'react'
import gitHub from './Images/GitHubLogo.svg'
import link from './Images/Link.svg'

function Works() {
  
  return (
    <>
    <div className='worksHeader' id='works'>
      <h2>Work</h2>
      <h3>Some of my previous works</h3>
    </div>

    <div className='works'>
      <div className='item1'>
        <div className='fade-info'>
          <h2>Formulalytics</h2>
          <p>A small web application to view the current f1 schedule and results from the current seasos using the ergast f1 api.</p>
          <p>Developed using React JS</p>
        <div className='links'>
          <a href='https://github.com/LukasLindqvist/Formulalytics' target="_blank">
            <img src={gitHub} alt='GitHub' className='gitLink' id='formulalyticsGit'></img>
          </a>
          <a href='https://www.formulalytics.com/' target="blank_">
            <img src={link} alt='link' className='webLink' id='formulalyticsLink'></img>
          </a>
        </div>
        </div>
      </div>
      <div className='item2'>
      <div className='fade-info'>
          <h2>Scandi Ice Cream</h2>
          <p>Webpage for an pretend ice cream stand company to display their service and menu.</p>
          <p>Developed using React JS</p>
        <div className='links'>
          <a href='https://github.com/LukasLindqvist/Scandi-Ice-Cream' target="_blank">
            <img src={gitHub} alt='GitHub' className='gitLink' id='iceCreamBarGit'></img>
          </a>
          <a href='https://lukaslindqvist.github.io/Scandi-Ice-Cream/' target= "_blank">
            <img src={link} alt='link' className='webLink' id='iceCreamBarLink'></img>
          </a>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Works