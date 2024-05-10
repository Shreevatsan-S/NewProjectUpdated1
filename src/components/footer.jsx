import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">

              <a href="#" className="logo">REA</a>

              <p className="section-text">
                RAJA EDUCATIONAL ACADEMY<br />
                REA<br />
                ...the raising wise<br />
              </p>

              <ul className="social-list">

                <li>
                  <a href="https://www.facebook.com/people/RAJ-EDUCATIONAL-ACADEMY/100048616584578/" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/rajushendre28/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Explore</p>
              </li>

              <li>
                <a href="#About" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="#Events" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Upcoming Events</span>
                </a>
              </li>

              <li>
                <a href="#Events" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Past Events</span>
                </a>
              </li>


            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#About" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">About us</span>
                </a>
              </li>
              <li>
                <a href="#Gallery" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Gallery</span>
                </a>
              </li>
              <li>
                <a href="#newsletter" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#freedemo" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Free demo</span>
                </a>
              </li>


              <li>
                <a href="#courses" className="footer-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">Courses</span>
                </a>
              </li>

            </ul>

            <ul className="footer-list">

              <li>
                <p className="footer-list-title">Contact Info</p>
              </li>

              <li className="footer-item">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                <address className="footer-link">
                Raja Educational Academy Door no.58-5-19
Danayya Street,
Patamata,
Vijayawada -
Pin code 520010
NTR Dist.
                </address>
              </li>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3825.562464703774!2d80.65775307514507!3d16.497677984245627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI5JzUxLjYiTiA4MMKwMzknMzcuMiJF!5e0!3m2!1sen!2sin!4v1715011834676!5m2!1sen!2sin" width="230" height="100" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              <li className="footer-item">
                <ion-icon name="call" aria-hidden="true"></ion-icon>

                <a href="tel:+13647657839" className="footer-link">9912450699</a>
              </li>

              <li className="footer-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <a href="mailto:contact@REA.com" className="footer-link">rajaeduacademy@gmail.com</a>
              </li>

            </ul>

          </div>

          <div className="footer-bottom">
            <p className="copyright">
              Copyright 2024 REA. All Rights Reserved <a href="#" className="copyright-link"></a>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
