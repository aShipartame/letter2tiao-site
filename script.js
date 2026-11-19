const letter = document.querySelector('.letter-page');

if (letter && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        letter.classList.add('is-visible');
        observer.disconnect();
      }
    },
    { threshold: 0.04 }
  );

  observer.observe(letter);
} else if (letter) {
  letter.classList.add('is-visible');
}
