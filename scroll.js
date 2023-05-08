document.querySelectorAll('button.moveMeToMySection:not([data-target="#Review"])').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = btn.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });