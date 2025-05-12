// Функция для троттлинга
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Параллакс-эффект
function initParallax() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const maxOffset = 100; // Уменьшаем максимальное смещение для более мягкого эффекта
    const evenColumnMultiplier = 7.5; // Увеличиваем смещение для чётных столбцов на 50%

    // Вычисляем высоту документа для определения прогресса прокрутки
    const documentHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1 // Предотвращаем деление на 0
    );
    console.log('Document height:', documentHeight); // Лог высоты документа

    const updateParallax = () => {
        // Прогресс прокрутки (от 0 до 1)
        const scrollProgress = window.scrollY / documentHeight;
        console.log('Scroll progress:', scrollProgress); // Лог прогресса прокрутки

        galleryItems.forEach(item => {
            const speed = parseFloat(item.getAttribute('data-parallax')) || 0.2;
            const column = parseInt(item.getAttribute('data-column'), 10);

            let yPos;

            // Для нечётных столбцов (1 и 3) — смещение вверх в начале
            if (column % 2 !== 0) {
                yPos = -maxOffset * (1 - scrollProgress) * speed;
            }
            // Для чётных столбцов (2 и 4) — смещение вниз в конце
            else {
                yPos = maxOffset * scrollProgress * speed * evenColumnMultiplier;
            }

            console.log(`Item ${column}: yPos = ${yPos}`); // Лог смещения для каждого элемента

            // Применяем смещение к .gallery-item
            item.style.transform = `translateY(${yPos}px)`;
        });
    };

    // Троттлинг события scroll (вызываем не чаще, чем раз в 16 мс, ~60fps)
    window.addEventListener('scroll', throttle(updateParallax, 16));
}

// Анимация "выплывания" и "прилёта" с использованием Intersection Observer
function initFadeUpAnimation() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const item = entry.target;
            const inner = item.querySelector('.gallery-item-inner'); // Находим внутренний контейнер

            if (entry.isIntersecting) {
                // Элемент вошёл в поле видимости — запускаем анимацию
                inner.classList.add('fade-up');
                inner.classList.add('slide-in');
            } else {
                // Элемент вышел из поля видимости — сбрасываем анимацию
                inner.classList.remove('fade-up');
                inner.classList.remove('slide-in');
                // Сбрасываем начальные стили, чтобы анимация могла сработать заново
                inner.style.opacity = '0';
                inner.style.transform = 'translateY(50px)';
            }
        });
    }, {
        threshold: 0.1, // Срабатывает, когда 10% элемента видно
        rootMargin: '0px 0px -50px 0px' // Немного смещаем точку срабатывания
    });

    // Наблюдаем за каждым элементом
    galleryItems.forEach(item => {
        observer.observe(item);
    });
}

// Инициализация эффектов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initFadeUpAnimation();
});
