// 1. Зберігання інформації про ОС та браузер у localStorage і вивід у футері
function initSystemInfo() {
  const systemInfo = {
    platform: navigator.platform || 'Невідома ОС',
    userAgent: navigator.userAgent,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled
  };

  // Перетворюємо об'єкт у рядок і записуємо в localStorage
  localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

  // Зчитуємо дані назад із localStorage і перетворюємо на об'єкт
  const savedRaw = localStorage.getItem('systemInfo');
  const savedInfo = savedRaw ? JSON.parse(savedRaw) : null;

  // Шукаємо блок у футері та виводимо дані
  const footerBox = document.getElementById('localstorage-info');
  if (footerBox && savedInfo) {
    footerBox.innerHTML = `
      <p><strong>Дані з localStorage:</strong></p>
      <p>Платформа (ОС): ${savedInfo.platform}</p>
      <p>Мова браузера: ${savedInfo.language}</p>
      <p>Cookies увімкнені: ${savedInfo.cookiesEnabled ? 'Так' : 'Ні'}</p>
      <p>Браузер (User-Agent): ${savedInfo.userAgent}</p>
    `;
  }
}



// 2. Отримання динамічних коментарів із сервера для Варіанта №19 та їх вивід
async function loadEmployerComments() {
  const commentsContainer = document.getElementById('employer-comments');
  if (!commentsContainer) return;

  const variantNumber = 19; // Твій номер варіанта у журналі групи
  const url = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;

  commentsContainer.innerHTML = '<p>Завантаження коментарів...</p>';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка запиту: ${response.status}`);
    }

    const comments = await response.json();

    // Очищаємо повідомлення про завантаження
    commentsContainer.innerHTML = '';

    // Створюємо список/контейнер карток у порядку отримання з сервера
    const list = document.createElement('div');
    list.className = 'comments-list';

    comments.forEach((comment) => {
      const card = document.createElement('article');
      card.className = 'comment-card';
      card.innerHTML = `
        <h3>${comment.name}</h3>
        <p class="comment-email"><strong>Email:</strong> ${comment.email}</p>
        <p class="comment-body">${comment.body}</p>
      `;
      list.appendChild(card);
    });

    commentsContainer.appendChild(list);
  } catch (error) {
    console.error('Помилка під час отримання коментарів:', error);
    commentsContainer.innerHTML = '<p>Не вдалося завантажити коментарі із сервера.</p>';
  }
}



// 3. Модальне вікно з формою зворотного зв'язку (з'являється через 1 хвилину)
function initFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal) return;

  // Запускаємо таймер на 60 000 мс (1 хвилина)
  setTimeout(() => {
    modal.classList.remove('modal-hidden');
  }, 60000);

  // Закриття вікна при натисканні на кнопку "Закрити"
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('modal-hidden');
    });
  }

  // Закриття вікна при натисканні на темний фон навколо форми
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('modal-hidden');
    }
  });
}

// 4. Автоматичний та ручний перемикач денного / нічного режиму
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');

  function applyTheme(isNight) {
    if (isNight) {
      document.body.classList.add('dark-theme');
      if (toggleBtn) {
        toggleBtn.textContent = '☀️ Денний режим';
      }
    } else {
      document.body.classList.remove('dark-theme');
      if (toggleBtn) {
        toggleBtn.textContent = '🌙 Нічний режим';
      }
    }
  }

  // Перевіряємо поточний час доби: денна тема від 07:00 до 21:00, нічна — в увесь інший час
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 7 && currentHour < 21;
  applyTheme(!isDaytime);

  // Ручне перемикання теми кнопкою
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-theme');
      applyTheme(!isCurrentlyDark);
    });
  }
}

// Запускаємо всі функції, коли HTML-документ повністю завантажиться
document.addEventListener('DOMContentLoaded', () => {
  initSystemInfo();
  loadEmployerComments();
  initFeedbackModal();
  initThemeToggle();
});