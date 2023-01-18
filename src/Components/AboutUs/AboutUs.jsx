import React from 'react'
import './AboutUs.css';
import AboutUsImg from '../../Images/AboutImg.jpg';
function AboutUs() {
  return (
    <div>
        <div className='whoweare' style={{display:'flex',justifyContent:'space-evenly'}}>
            <div>
                <h2>WHO WE ARE</h2>
                <p> Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technologies-Artificial intelligence (AI), Machine Learning. Robotic Process Automation(RPA), BlocChain, and Internet of Things(IoT).</p>
                <p>Rubixe<sup>TM</sup> mission is to enable business to leverage the ful potential of disruptive technologies and stay competitie in teh market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.</p>
            </div>
            <img style={{width:'200px', height:'200px'}} src={AboutUsImg} alt="aboutusimg" />
        </div>
        <div className='howwestarted'>
            <h2>WHERE WE STARTED</h2>
            <p>We started in 2014, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence(AI), Cyber Security. Robotics Process Automation(RPA), Internet of Things (IoT), aand BlockChain Technology.</p>
        </div>
    </div>
  )
}

export default AboutUs