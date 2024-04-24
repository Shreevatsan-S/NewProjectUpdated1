'use strict';

/**
 * Element toggle function
 */
const toggleElem = (elem) => {
  if (elem) {
    elem.classList.toggle("active");
  }
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

navTogglers.forEach(toggler => {
  toggler.addEventListener("click", () => {
    toggleElem(navbar);
    toggleElem(overlay);
  });
});

/**
 * Header sticky & back to top button
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    if (header && backTopBtn) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
      header.classList.add("header-anim");
    }
  } else {
    if (header && backTopBtn) {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
      header.classList.remove("header-anim");
    }
  }
});

/**
 * Search box toggle
 */
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

searchTogglers.forEach(toggler => {
  toggler.addEventListener("click", () => {
    toggleElem(searchBox);
  });
});

/**
 * Wishlist button toggle
 */
const wishlistBtns = document.querySelectorAll("[data-wish-btn]");

wishlistBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    toggleElem(this);
  });
});

/**
 * Popup functionality
 */
const categoryCards = document.querySelectorAll('.category-card');

function showPopup(category) {
  let content = '';
  switch (category) {
    case 'abacus':
      content = '<h2>Abacus</h2><p>The Abacus is an ancient mathematical instrument...</p>';
      break;
    case 'vedic-math':
      content = '<h2>Vedic Math</h2><p>The origin of Vedic Maths is from Atharva Veda...</p>';
      break;
    case 'handwriting':
      content = '<h2>Handwriting</h2><p>This is some information about Handwriting...</p>';
      break;
    case 'ekids':
      content = '<h2>E-Kids</h2><p>This is some information about E-Kids...</p>';
      break;
    case 'memory-techniques':
      content = '<h2>Memorization Techniques</h2><p>Memorization techniques are strategies...</p>';
      break;
    case 'rubic-cube':
      content = '<h2>Rubik\'s Cube</h2><p>This is some information about Rubik\'s Cube...</p>';
      break;
    default:
      content = 'Default popup content';
  }
  const popupContent = document.getElementById('popupContent');
  const popupContainer = document.getElementById('popupContainer');
  if (popupContent && popupContainer) {
    popupContent.innerHTML = content;
    popupContainer.style.display = 'block';
  }
}

categoryCards.forEach(card => {
  card.addEventListener('click', function() {
    const categoryId = this.getAttribute('id');
    showPopup(categoryId);
  });
});

window.addEventListener('click', function(event) {
  const popup = document.getElementById('popupContainer');
  if (popup && event.target === popup) {
    popup.style.display = 'none';
  }
});
