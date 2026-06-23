(function() {
  function showRegion() {
    // Hide all content regions
    document.querySelectorAll('.content-region').forEach(function(el) {
      el.classList.remove('show');
      el.classList.add('hide');
    });

    // Remove active class from all menu items
    document.querySelectorAll('.main-menu a').forEach(function(el) {
      el.classList.remove('active');
    });

    // Get the current hash or default to first menu item
    var region = location.hash || document.querySelector('.main-menu a').getAttribute('href');

    // Show the selected region
    var targetRegion = document.querySelector(region);
    if (targetRegion) {
      targetRegion.classList.remove('hide');
      targetRegion.classList.add('show');
    }

    // Add active class to current menu item
    var activeLink = document.querySelector('.main-menu a[href="' + region + '"]');
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Run on load and hash change
  window.addEventListener('load', showRegion);
  window.addEventListener('hashchange', showRegion);
})();
