document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
    button.textContent = details.style.display === 'block' ? 'Hide Details' : 'View Details';
  });
});
