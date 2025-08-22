import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <h4><i className="fa-solid fa-phone"></i> Հեռախոսահամար</h4>
            <p>+374 (93) 67-69-66</p>
          </div>

          <div className="info-box">
            <h4><i className="fa-solid fa-location-dot"></i> Հասցե</h4>
            <p>Ք. Արարատ, Արշակունյաց 2/1</p>
            <p>Ք. Վեդի Արամայիսյան 42/6</p>
          </div>

          <div className="info-box">
            <h4><i className="fa-solid fa-envelope"></i> Էլ. հասցե</h4>
            <p>info@aitschool.am</p>
          </div>

          <div className="info-box">
            <h4><i className="fa-solid fa-globe"></i> Սոցիալական ցանցեր</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/ararat_itcenter/"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/AraratITCenter"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://t.me/aitschool"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="AIT Center Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.6621950269437!2d44.693677432036!3d39.85538523462385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40153168027901db%3A0x878fd2ca7e5b9e24!2sArarat%20IT%20Center!5e0!3m2!1sen!2sam!4v1754650607122!5m2!1sen!2sam"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;