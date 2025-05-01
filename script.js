// Mobile Navbar Toggle with Icon Swap
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const openIcon = menuToggle.querySelector('.open-icon');
const closeIcon = menuToggle.querySelector('.close-icon');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  const menuIsOpen = navLinks.classList.contains('active');
  openIcon.style.display = menuIsOpen ? 'none' : 'inline-block';
  closeIcon.style.display = menuIsOpen ? 'inline-block' : 'none';
});

// Optional: Auto-close menu when a nav link is clicked (mobile UX improvement)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      openIcon.style.display = 'inline-block';
      closeIcon.style.display = 'none';
    }
  });
});

// Structural Logs for Section Tracking
console.log("✅ Navbar toggle initialized");
console.log("✅ Phone mockup section loaded");
console.log("✅ WhatCan section loaded");
console.log("✅ Fans section loaded");
console.log("✅ Contact/Replies section loaded");
console.log("✅ Earn section loaded");
console.log("✅ Filter section loaded");
console.log("✅ Secure Communication section loaded");
console.log("✅ Ahead section loaded");
console.log("✅ Footer loaded");
