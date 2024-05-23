document.addEventListener('DOMContentLoaded', () => {
  // Функция для прокрутки к якорю
  const scrollToAnchor = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Если текущая страница - главная, проверяем наличие якоря в URL и прокручиваем к нему
  const currentPage = window.location.pathname;
  if (currentPage === '/') {
    const hash = window.location.hash.substring(1); // Получаем якорь из URL без символа #
    if (hash) {
      scrollToAnchor(hash);
    }
  }

  // Функция для обработки клика по якорной ссылке
  const handleLinkClick = (e) => {
    e.preventDefault(); // Отменяем стандартное действие ссылки

    // Получаем значение атрибута href, чтобы определить id якоря
    const targetHref = e.target.getAttribute('href');
    const targetId = targetHref.substring(1);

    // Если текущая страница - главная, прокручиваем к якорю сразу
    if (currentPage === '/') {
      scrollToAnchor(targetId);
    } else {
      // Если это не главная страница, перенаправляем на главную страницу с якорем в URL
      window.location.href = `/#${targetId}`;
    }
  };

  const links = document.querySelectorAll('.scroll');

  links.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
  });
});
