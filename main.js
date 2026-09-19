// Mobile nav toggle — shows/hides the nav links on small screens.
document.getElementById('navToggle').addEventListener('click', function () {
  var links = document.querySelector('.nav-links');
  var isOpen = links.style.display === 'flex';

  links.style.display = isOpen ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '64px';
  links.style.right = '24px';
  links.style.background = '#10161f';
  links.style.border = '1px solid #232c38';
  links.style.padding = '16px 22px';
  links.style.gap = '14px';
});
