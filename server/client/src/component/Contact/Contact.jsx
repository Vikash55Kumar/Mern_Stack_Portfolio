import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Contact.css"
import vikash from '../../assets/contact.jpg'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
    const [validate, setValidate]=useState(false);
    function onChange(value) {
      setValidate(true);
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_shadr0o', 'template_mj7rlbd', form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              e.target.reset();
              alert("Form submit successfully");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <>
          <section id="contact">
              <div className="clientContact">
                  <span className="title1">Let's Connect</span>
                  <span className="description1">Please fill out the form to contact to me for ant discussion</span>
                  <div className="form">
                      <div className="clintImgs">
                          <img src={vikash} alt="" className="clintImg" />
                      </div>
                      <form ref={form} onSubmit={sendEmail} className="ClientForm">
                          <TextField
                              className='forms'
                              id="name"
                              name='name'
                              required
                              label="Name"
                              placeholder="Your Name"
                          />
                          <TextField
                              className='forms'
                              type='email'
                              id="email"
                              name='email'
                              required
                              label="Email"
                              placeholder="Your email"
                          />
                          <TextField
                              className='forms'
                              type='message'
                              id='message'
                              name='message'
                              required
                              label="Message" multiline rows={3}
                              placeholder='Your message'
                          />
{/*                           <ReCAPTCHA className='recaptcha'
                            sitekey="6LfI8sopAAAAABbz3OxixlMpp4R3qKtOA90w4tbb"
                            onChange={onChange}                           
                          /> */}
                          <Button variant="contained" className="submit-btn" type="submit" value="Send">Submit</Button>
                      </form>
                  </div>
              </div>
          </section>
        </>
  )
}
