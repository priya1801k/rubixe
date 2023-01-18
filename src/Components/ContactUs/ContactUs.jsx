import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='sections'>
        <section>section one</section>
        <hr></hr>
        <section>
            <form action="/action_page.php">
                <label for="fname">Name<sup>*</sup></label><br/>
                <input type="text" id="fname" name="fname" value="" placeholder='Enter Your Name'/><br/>
                <label for="lname">Email<sup>*</sup></label><br/>
                <input type="text" id="lname" name="lname" value="" placeholder='Enter Your Name'/><br/>
                <label for="lname">Mobile Number<sup>*</sup></label><br/>
                <input type="text" id="lname" name="lname" value="" placeholder='Enter Your Mobile Number'/><br/>
                <input type="submit" value="Register Now"/><br/>
            </form> 
        </section>
    </div>
  )
}

export default ContactUs