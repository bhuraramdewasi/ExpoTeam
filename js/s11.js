// Close mobile menu when a link is clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('#navbarNav');

      // Check if it's currently open
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Programmatically toggle to close
      }
    });
  });