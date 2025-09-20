// Tabs
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
  });
});

// Carousel
let current = 0;
const items = document.querySelectorAll('.carousel-item');

document.querySelector('.carousel-next').addEventListener('click', () => {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  items[current].classList.add('active');
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  items[current].classList.remove('active');
  current = (current - 1 + items.length) % items.length;
  items[current].classList.add('active');
});
