// Hero component JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  // Form validation
  searchForm.addEventListener('submit', function (e) {
    if (searchInput.value.trim() === '') {
      e.preventDefault();
      searchInput.classList.add('error');
      searchInput.placeholder = 'Por favor ingrese un término de búsqueda';
    }
  });

  // Remove error class when user starts typing
  searchInput.addEventListener('input', function () {
    if (this.classList.contains('error')) {
      this.classList.remove('error');
      this.placeholder = 'Buscar empleos...';
    }
  });

  // Fade-in animation
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('animate-fade-in');
  }
});
