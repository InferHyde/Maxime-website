import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './reservation_form.css'


export const Reservation_section = () =>{
  const [isDisplayingForm, setIsDisplayingForm] = useState(false);
  const [reservationDate, setReservationDate] = useState('')
  const [reservationTime, setReservationTime] = useState('')
  const [reservationPartySize, setReservationPartySize] = useState('')

  // useEffect(()=>{  
  //   console.log(reservationDate)
  //   console.log(reservationTime)
  //   console.log(reservationPartySize)
  // }
  // )
return(
  <section className='reservationSection'>
    <h2 className='menuSectionBoldText'>Make a reservation</h2>
    <form className='reservationSectionForm' >
        <input className='reservationSectionInput' type='text' onChange={(e)=>setReservationDate(e.target.value)} placeholder=' Date' onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text' ) } />
        <input className='reservationSectionInput' type='text' onChange={(e)=>setReservationTime(e.target.value)} placeholder=' Time' onFocus={(e) => (e.target.type) = 'time' } onBlur={(e) => (e.target.type = 'text') } />
        <input className='reservationSectionInput' type='number' onChange={(e)=>setReservationPartySize(e.target.value)} placeholder='  Party Size'/>
        <button className='purpleSubmitButton' type='button' onClick={()=>setIsDisplayingForm(true)}>Submit</button>
    </form>
    {isDisplayingForm && <Reservation_form setDisplaying={setIsDisplayingForm} date={reservationDate} time={reservationTime} size={reservationPartySize} />}
  </section>
);
}

//__________________________


export const Reservation_form = ({setDisplaying, date, time, size}) => {
  console.log(date)
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

  useEffect(()=>{

    document.getElementById('dateInput').value = date;
    document.getElementById('timeInput').value = time;
    document.getElementById('sizeInput').value = size;
    // document.getElementById('dateInput').value = "2014-02-02";
    // document.getElementById('timeInput').value = '08:00'
    // document.getElementById('sizeInput').value = '2'
  })
  


 return (
      <section className='reservationFormSection' >
        <div className='reservationFormBG' onClick={()=>(setDisplaying(false))} />
        <form className='reservationContainer' ref={form} onSubmit={sendEmail} >
          <div className='closingCross' onClick={()=>{setDisplaying(false)}}/>
          <h2 className='reservationTitle'>Reservation</h2>
          <label className='formHeading'>Name</label>
          <input className='formInput' type="text" name="user_name" placeholder='Dave'/>
          <label className='formHeading'>Date</label>
          <input className='formInput' id='dateInput' type='date' name='date' />
          <label className='formHeading'>Time</label>
          <input className='formInput' id='timeInput' type='time' name='time' />
          <label className='formHeading'>Party size</label>
          <input className='formInput' id='sizeInput' type='number' name='party_size' placeholder='4' />
          <label className='formHeading'>Phone number/Email</label>
          <input className='formInput' type="text" name="contact_info" placeholder='15920388372  /  Person@outlook.com' />
          <label className='formHeading'>Message</label>
          <textarea className='formInputMessage' name="message" placeholder='anything you want to tell us?' />
        
          <input className='formSubmitButton' type="submit" value="Send Reservation" />
        </form>
      </section>
  );
};

