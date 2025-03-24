document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  function showSlide(index) {
    if (index >= items.length) currentSlide = 0;
    if (index < 0) currentSlide = items.length - 1;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  document.querySelector('.carousel-next').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
  });

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
  });

  // Auto advance slides
  setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
  }, 5000);

  // Chat functionality
  const chatToggle = document.getElementById('chat-toggle');
  const chatWidget = document.getElementById('chat-widget');
  const chatForm = document.getElementById('chat-form');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');

  chatToggle.addEventListener('click', () => {
    chatWidget.classList.toggle('chat-collapsed');
    chatToggle.textContent = chatWidget.classList.contains('chat-collapsed') ? '+' : '−';
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
      addMessage('user', message);
      // Simulate bot response
      setTimeout(() => {
        addMessage('bot', 'Thanks for your message! This is a demo chat feature.');
      }, 1000);
      chatInput.value = '';
    }
  });

  function addMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Form submission handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    form.reset();
  });

  // Add animation to cards on scroll
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
  });
});
