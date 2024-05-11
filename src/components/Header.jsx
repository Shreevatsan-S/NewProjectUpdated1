import React, { useState, useEffect } from 'react';

function Header() {
  const [headerHeight, setHeaderHeight] = useState(120); // Initial header height, adjust as needed

  // Update header height when the window is resized
  const handleResize = () => {
    const newHeight = window.innerHeight * 0.1; // You can adjust the percentage as needed
    // Increase header height slightly when reducing window size
    const decreasedHeight = headerHeight < newHeight ? headerHeight * 1.1 : newHeight;
    setHeaderHeight(decreasedHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <header style={{ height: `${headerHeight}px` }} className="header" data-header>
      <div className="container">
        <h1>
          <a href="/" className="logo">
            <img src={require('./logo.png')} alt="Logo" />
          </a>
        </h1>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">Raju Education Academy</a>
            <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="https://rajaeducationalacademy.in/#home" className="navbar-link" data-nav-toggler>Home</a>
            </li>
            <li className="navbar-item">
              <a href="https://rajaeducationalacademy.in/#About" className="navbar-link" data-nav-toggler>About</a>
            </li>
            <li className="navbar-item">
              <a href="https://rajaeducationalacademy.in/#courses" className="navbar-link" data-nav-toggler>Courses</a>
            </li>
            <li className="navbar-item">
              <a href="https://rajaeducationalacademy.in/#event" className="navbar-link" data-nav-toggler>Gallery</a>
            </li>
            <li className="navbar-item">
              <a href="https://rajaeducationalacademy.in/#newsletter" className="navbar-link" data-nav-toggler>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="https://rajaeduacademy.vercel.app/login" className="header-action-btn login-btn" onClick={() => window.open("https://rajaeduacademy.vercel.app/login", "_self")}>
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            <span className="span">Login</span>
          </a>

          <button className="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Header;
