import React from 'react';
import './Home.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import TechForTeens from './TechForTeens/TechForTeens';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Whereweare from './WhereWeAre/Whereweare';
function Home() {
  return (
    <div>
        <section><Header/></section>
        <section><Banner/></section>
        <section><AboutUs/></section>
        <section><Whereweare/></section>
        <section><TechForTeens/></section>
        <section><ContactUs/></section>
        <section><Footer/></section>
    </div>
  )
}

export default Home