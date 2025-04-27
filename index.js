// za button rotate
document.querySelectorAll('.smiley').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('rotating')) return;

    button.classList.add('rotating');

    setTimeout(() => {
      const url = button.getAttribute('data-url');
      window.location.href = url;
    }, 2000); // Wait 2 seconds before redirect
  });
});

document.querySelector('.menu').addEventListener('click', function () {
  const url = this.getAttribute('data-url');
  window.location.href = url;
});