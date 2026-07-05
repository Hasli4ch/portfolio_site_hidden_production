// Находим все элементы, которые должны появляться при прокрутке
const revealElements = document.querySelectorAll('.reveal');

// Создаём наблюдатель за попаданием элемента в область видимости
const observer = new IntersectionObserver((entries) => {
  // Проходим по всем наблюдаемым элементам
  entries.forEach((entry) => {
    // Если элемент попал в экран, добавляем класс для анимации
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // После появления больше не отслеживаем этот элемент
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12 // Срабатывание, когда видно примерно 12% блока
});

// Запускаем наблюдение за каждым блоком
revealElements.forEach((el) => observer.observe(el));
