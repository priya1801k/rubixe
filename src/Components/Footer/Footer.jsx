import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';
function Footer() {

    const takeMetoFB=()=>{
        alert("social media");
    }
    
  return (
    <div>
    <div className='footerBox' >
        <section className='footerHead'>
            <div>
                <h4>ABOUT US</h4>
                <p> Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technologies-Artificial intelligence (AI), Machine Learning. Robotic Process Automation(RPA), BlocChain, and Internet of Things(IoT). Rubixe<sup>TM</sup> mission is to enable business to leverage the ful potential of disruptive technologies and stay competitie in teh market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.</p>
            </div>
            <div>
                <h4>MENU</h4>
                <p>Home</p>
                <p>Services</p>
                <p>Products</p>
                <p>Career</p>
            </div>
            <div>
                <h4>LEARN MORE</h4>
                <p>About</p>
                <p>Contact Us</p>
            </div>
            <div>
                <h4>ADDRESS</h4>
                <p>Novel Tech Park, 1st Floor, HOsur Rd,</p>
                <p>Kudlu gate, Bengalure, Karnatake</p>
                <p>460068</p>
                <p>Phone: 0805-717-8999</p>
                <p>Email:hi@rubixe.come</p>
                <div>
                    <h4>SOCIAL MEDIA</h4>
                    <div className='social'>
                    <div className='iconSocial'><FacebookIcon onClick={takeMetoFB}/></div>
                    <div className='iconSocial'><LinkedInIcon onClick={takeMetoFB}/></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <div className='footerTail'>&copy; Copyright 2017-2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD | All Rights Reserved </div>

    </div>
  )
}

export default Footer