import React from 'react'
import HeaderImg from '../../Images/white-rubixe-logo.png';
import './Header.css';
function Header() {

  return (
    <div className='header'>
        <img style={{height:'40px', width:'200px'}} src={HeaderImg} alt='headerImg'></img>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href='#'>PRODUCTS</a></li>
                <li><a href='#'>AI INTERSHIP</a></li>
                <li><a href='#'>CAREER</a></li>
                <li><a href='#'>BLOG</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>CONTACT US</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;