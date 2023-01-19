import React from 'react';
import './ContactUs.css';
import { useState,useEffect } from 'react';
import {alphanumericValidation,emailValidation,telephoneValidation} from './Validation.js';

function ContactUs() {

  const [getglobal,setglobal] = useState(false);

  const [getForm,setForm] = useState({
    fullName:'',
       email:'',
       telephone:'',
  });

  const [getFormValidation,setFormValidation] = useState({
    fullName:false,
      email:false,
      telephone:false,
 });


 //getForm ke baad hi formValidation will work

 useEffect(()=>{
  formValidation();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[getForm]);


 const formValidation=()=>{
  setFormValidation({
    fullName:alphanumericValidation(getForm.fullName),
      email:emailValidation(getForm.email),
      telephone:telephoneValidation(getForm.telephone),
  });
 }

 const onSubmit=()=>{
  formValidation();
  setglobal(true);
 }

  const onChangeHandler=(event)=>{
     setForm({...getForm,[event.target.name]:event.target.value});
     formValidation();
  }
return (<div className='contactUs'>
        <div className='registerBox'>
         <div className='left_section'>
              <h2>GET IN TOUCH</h2>
              <p>Please complete the form and we will<br></br> get back to you.</p>
         </div>
         <div className='right_section'>
              <div className='form-group'>
                    <label>Name<sup>*</sup></label>
                    <input placeholder='Enter Your Name' type="text" name="fullName" value={getForm.fullName} onChange={onChangeHandler} />
                    {getglobal && getFormValidation.fullName && <div className="danger">Name must be contain 3-40 char</div>}
                </div>
                <div className='form-group'>
                    <label>Email<sup>*</sup></label>
                    <input placeholder='Enter Your Email Address' type="text" name="email" value={getForm.email} onChange={onChangeHandler} />
                    {getglobal && getFormValidation.email && <div className="danger">email must be like ex:priya@gmail.com</div>}
                </div>
                <div className='form-group'>
                    <label>Mobile Number<sup>*</sup></label>
                    <input placeholder='Enter Your mobile number' type="text" name="telephone" value={getForm.telephone} onChange={onChangeHandler} />
                    {getglobal && getFormValidation.telephone && <div className="danger">telephone must be numeric and contain 3-40</div>}
                </div>
                <div className='form-group'>
                    <button onClick={onSubmit} >REGISTER ME</button>
                </div>
         </div>
         </div>
          
      </div>)
}

export default ContactUs