const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // يمنع الرابط من التصرف الافتراضي

    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const buttons = document.querySelectorAll('.btn');
const sections = document.querySelectorAll('.all section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' to the clicked button
    button.classList.add('active');

    // Get the target section from data-target attribute
    const targetId = button.getAttribute('data-target');

    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = 'grid'; // show target
      } else {
        section.style.display = 'none'; // hide others
      }
    });
  });
});



