/* MCHEN Machine Parts - Scripts */

// Product filter (Products Overview page)
function filterAll() {
  document.querySelectorAll('.p-card').forEach(c => c.style.display = '');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn').classList.add('active');
}

function filterCat(cat) {
  document.querySelectorAll('.p-card').forEach(c => {
    c.style.display = c.dataset.cat === cat ? '' : 'none';
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Mobile navigation toggle
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    function closeNav() {
      nav.classList.remove('nav-open');
      toggle.innerHTML = '\u2630';
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (nav.classList.contains('nav-open')) {
        closeNav();
      } else {
        nav.classList.add('nav-open');
        toggle.innerHTML = '\u2715';
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target) && e.target !== toggle) {
        closeNav();
      }
    });
  }

  // Dropdown hover for desktop
  document.querySelectorAll('.dropdown-wrap').forEach(function(el) {
    el.addEventListener('mouseenter', function() { el.querySelector('.dropdown-menu').style.display = 'block'; });
    el.addEventListener('mouseleave', function() { el.querySelector('.dropdown-menu').style.display = 'none'; });
  });
});
