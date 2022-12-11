import React from 'react'
import "./About.css"
import Logo from '../../accets/Images/about.png'

function About() {

 
  return (
    <div>


      <div className='container'>
        <div className='about-title'>
          <h1>  ABOUT US</h1>
        </div>

        <div className="about-logo">

          <img src={Logo} />

        </div>
        <div className="about-content">
          <p>

            Sardar Vallabhbhai Patel Institute of Technology, Vasad, has emerged as the chieftain among the premiere institutes of Gujarat for the last 25 years. Prakarsh is one of the most recognized symposiums all over Gujarat.

            <br/>
            <br/>
            
            

            It is a perfect launch pad for tech geeks to showcase their intelligence and innovativeness, and a massive platform for various activities and events combined with loads of entertainment. Prakarsh 2023 will be held on 23-25 Feb and will feature an impressive lineup of 40 events, which will incorporate fun activities with ardour.
          </p>

    <br/>

    <br/>

    <br/>

    <br/>

        </div>



      </div>

   
    </div>
  )
}

export default About