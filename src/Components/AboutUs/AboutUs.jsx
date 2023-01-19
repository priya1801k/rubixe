import React from 'react'
import './AboutUs.css';
import AboutUsImg from '../../Images/AboutImg.jpg';
function AboutUs() {
  return (
    <div className='AboutMe'>
        <div className='whoweare'>
            <div>
                <h2>WHO WE ARE</h2>
                <p> Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technologies-Artificial intelligence (AI), Machine Learning. Robotic Process Automation(RPA), BlocChain, and Internet of Things(IoT).</p><br/>
                <p>Rubixe<sup>TM</sup> mission is to enable business to leverage the ful potential of disruptive technologies and stay competitie in teh market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.</p>
            </div>
            <img style={{width:'200px', height:'200px'}} src={AboutUsImg} alt="aboutusimg" />
        </div>
        
    </div>
  )
}

export default AboutUs