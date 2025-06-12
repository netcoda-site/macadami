document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.icon-x');
  let isOpen = false;

  gsap.set(answer, {height: 0, opacity: 0, overflow: "hidden"});
  gsap.set(icon, {rotate: 0});

  question.addEventListener('click', () => {
    if (isOpen) {
      // Закрытие: плавно скрываем по высоте и прозрачности
      gsap.to(answer, {height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut"});
      gsap.to(icon, {rotate: 0, duration: 0.2, ease: "power2.inOut"});
      item.classList.remove('open');
    } else {
      // Закрыть другие открытые
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if(openItem !== item) {
          gsap.to(openItem.querySelector('.faq-answer'), {height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut"});
          gsap.to(openItem.querySelector('.icon-x'), {rotate: 0, duration: 0.2, ease: "power2.inOut"});
          openItem.classList.remove('open');
        }
      });
      // Открытие: сначала вычисляем autoHeight
      gsap.set(answer, {height: "auto", opacity: 1});
      const autoHeight = answer.offsetHeight;
      gsap.set(answer, {height: 0, opacity: 0});
      // Вот сюда вставь fromTo для плавного появления
      gsap.fromTo(answer, 
        {height: 0, opacity: 0}, 
        {height: autoHeight, opacity: 1, duration: 0.4, ease: "power2.inOut"}
      );
      gsap.to(icon, {rotate: 135, duration: 0.2, ease: "power2.inOut"});
      item.classList.add('open');
    }
    isOpen = !isOpen;
  });
});
  });
});



