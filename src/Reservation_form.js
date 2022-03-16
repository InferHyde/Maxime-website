import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './reservation_form.css'

export const Reservation_form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_bxil2lr', 'template_gqe554k', form.current, 'byM-mcBzHrD_eHfEc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  function setDate(){
    document.getElementById("dateInput").value = "2014-02-09";
  }

  return (
      <form className='reservationContainer' ref={form} onSubmit={sendEmail} >
        <h2 className='reservationTitle'>Reservation</h2>

        <label className='formHeading'>Name</label>
        <input className='formInput' type="text" name="user_name" placeholder='Dave'/>

        <label className='formHeading'>Date</label>
        <input className='formInput' id='dateInput' type='date' name='date' />

        <label className='formHeading'>Time</label>
        <input className='formInput' type='time' name='time' value='7:00PM'/>

        <label className='formHeading'>Party size</label>
        <input className='formInput' type='number' name='party_size' placeholder='4' />

        <label className='formHeading'>Phone number/Email</label>
        <input className='formInput' type="text" name="contact_info" placeholder='15920388372  /  Person@outlook.com' />

        <label className='formHeading'>Message</label>
        <textarea className='formInputMessage' name="message" placeholder='anything you want to tell us?' />
        
        <input className='formSubmitButton' type="submit" value="Send Reservation" />
      </form>
    
    
  );
};

export default Reservation_form