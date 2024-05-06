import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './assets/css/style.css'; // Import your CSS file

const Demo = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
  
    const fromName = form.current.from_name.value;
    const phoneNumber = form.current.phone_number.value;
    const fromEmail = form.current.from_email.value;
    const course = form.current.course.value;
  
    emailjs
      .sendForm('service_w422nkd', 'template_y08ul6j', form.current, {
        from_name: fromName,
        phone_number: phoneNumber,
        from_email: fromEmail,
        course: course,
        publicKey: 'kVQTtxyowTPrsDRRn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Update state variable to true after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
     
      <div className="container">
        <div className="content">
          <div className="right-side">
          <div className="input-container">
          <h1>Register for Demo Class</h1>
  <div className="input-box">
    <input type="text" name="from_name" placeholder="Name" required />
  </div>
  <div className="input-box">
    <input type="text" name="phone_number" placeholder="Phone No" required />
  </div>
  <div className="input-box">
    <input type="email" name="from_email" placeholder="Email Id" required />
  </div>
  <div className="input-box">
    <select name="course" required>
      <option value="">Select Your Course</option>
      <option value="abacus-junior">Abacus Junior</option>
      <option value="abacus-senior">Abacus Senior</option>
      <option value="vedic-maths">Vedic Maths</option>
      <option value="cursive-writing">Cursive Writing</option>
      <option value="rubiks-cube">Rubik's Cube</option>
      <option value="e-kids">E-Kids</option>
    </select>
  </div>
  <div className="button">
              <button type="submit">Submit</button>
            </div>
</div>


           
          </div>
        </div>
      </div>
      {/* Display warning message if form is submitted successfully */}
      {isSubmitted && <div>Warning: Email sent!</div>}
    </form>
  );
};

export default Demo;
