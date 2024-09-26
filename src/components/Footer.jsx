import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row"> I
          {/* Contactnfo */}
          <div className="col-md-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaMapMarkerAlt className="me-2" /> North nazimabad st 9, <strong>Pakistan, karachi</strong>
              </li>
              <li className="mb-3">
                <FaPhoneAlt className="me-2" /> +92 44422233888
              </li>
              <li>
                <FaEnvelope className="me-2" /> <a href="https://astraldevelopers.com/" className="text-light">astraldevelopers0.com</a>
              </li>
            </ul>
          </div>
          {/* About Section */}
          <div className="col-md-6">
            <h5>About the company</h5>
            <p>We specialize in crafting innovative digital solutions, transforming ideas into impactful software applications</p>
            {/* Social Icons */}
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-light me-3">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-light">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



