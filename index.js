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

window.addEventListener('DOMContentLoaded', () => {
  const activeButton = document.querySelector('.btn.active');
  if (activeButton) {
    const targetId = activeButton.getAttribute('data-target');

    sections.forEach(section => {
      section.style.display = (section.id === targetId) ? 'grid' : 'none';
    });
  }
});

// ✅ لما تضغطي على أي زر، خليه هو الـ active واعرض قسمه
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const targetId = button.getAttribute('data-target');
    sections.forEach(section => {
      section.style.display = (section.id === targetId) ? 'grid' : 'none';
    });
  });
});




