// Находим форму
const form = document.querySelector('.feedback__form');

// Находим элемент для вывода сообщения об успешной отправке
const messageContainer = document.getElementById('message');

const messageForm = document.getElementById('messageForm');
if (form) {
  // Изначально скрываем messageForm
  messageForm.style.display = 'none';

  // Находим кнопку отправки и блокируем ее
  const submitButton = document.querySelector('.feedback__btn');
  submitButton.disabled = true;

  // Находим кнопку проверки
  const checkButton = document.getElementById('checkBtn');

  // Функция для генерации случайного числа от 0 до 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  // Вставляем случайные числа в input поля с id a и b
  const inputA = document.getElementById('a');
  const inputB = document.getElementById('b');
  function setRandomNumbers() {
    inputA.value = getRandomNumber();
    inputB.value = getRandomNumber();
  }
  setRandomNumbers();

  // Находим поле для ввода суммы
  const inputC = document.getElementById('c');

  // Добавляем обработчик события нажатия на кнопку "Проверить"
  checkButton.addEventListener('click', () => {
    // Проверяем, правильная ли сумма
    const sum = parseInt(inputA.value) + parseInt(inputB.value);
    if (parseInt(inputC.value) === sum) {
      // Если сумма правильная, разблокируем кнопку
      submitButton.disabled = false;
      messageContainer.innerText = '';
    } else {
      // Если сумма неправильная, блокируем кнопку, выводим сообщение об ошибке и обновляем числа
      submitButton.disabled = true;
      messageContainer.innerText = 'Вы посчитали неправильно';
      setRandomNumbers();
    }
  });

  if (form) {
    // Добавляем обработчик события отправки формы
    form.addEventListener('submit', (event) => {
      // Предотвращаем отправку формы по умолчанию
      event.preventDefault();

      // Отправляем данные формы на сервер с помощью AJAX (ваша реализация отправки формы может отличаться)
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', form.action, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          // Если успешно, выводим сообщение об успешной отправке и скрываем форму
          messageContainer.innerText = '';
          messageForm.querySelector('span').innerText = 'Отправлено';
          messageForm.style.display = 'flex';
          form.style.display = 'none';
        } else {
          // Обработка ошибок, если нужно
          messageForm.querySelector('span').innerText = 'Ошибка отправки';
          messageForm.style.display = 'flex';
        }
      };
      xhr.send(formData);
    });
  }
}
