import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: email,
      user_name: name,
      to_name: name,
      message: message,
    };

    emailjs
      .send(
        'service_fxmb51x', 
        'template_pec5yla', 
        templateParams, 
        'wmZ6nQfP3ly8Gx2tk'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          window.location.reload(); 
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={sendEmail} className="bg-light p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor="user_name" className="form-label">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="user_email" className="form-label">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary w-100">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default ContactPage;
