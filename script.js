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
});
