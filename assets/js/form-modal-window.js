// Находим форму
const modalForm = document.querySelector('.modal-window__form');

// Находим элемент для вывода сообщения об успешной отправке
const messageErrorModal = document.getElementById('messageErrorModal');

const messageSuccessfulModal = document.getElementById(
  'messageSuccessfulModal'
);
if (modalForm) {
  // Изначально скрываем messageSuccessfulModal
  messageSuccessfulModal.style.display = 'none';

  // Находим кнопку отправки и блокируем ее
  const submitButtonModal = document.querySelector('.modal-window__btn');
  submitButtonModal.disabled = true;

  // Находим кнопку проверки
  const checkButtonModal = document.getElementById('checkBtnModal');

  // Функция для генерации случайного числа от 0 до 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  // Вставляем случайные числа в input поля с id aForm и bForm
  const inputAForm = document.getElementById('aForm');
  const inputBForm = document.getElementById('bForm');
  function setRandomNumbers() {
    inputAForm.value = getRandomNumber();
    inputBForm.value = getRandomNumber();
  }
  setRandomNumbers();

  // Находим поле для ввода суммы
  const inputCForm = document.getElementById('cForm');

  // Добавляем обработчик события нажатия на кнопку "Проверить"
  checkButtonModal.addEventListener('click', () => {
    // Проверяем, правильная ли сумма
    const sum = parseInt(inputAForm.value) + parseInt(inputBForm.value);
    if (parseInt(inputCForm.value) === sum) {
      // Если сумма правильная, разблокируем кнопку
      submitButtonModal.disabled = false;
      messageErrorModal.innerText = '';
    } else {
      // Если сумма неправильная, блокируем кнопку, выводим сообщение об ошибке и обновляем числа
      submitButtonModal.disabled = true;
      messageErrorModal.innerText = 'Вы посчитали неправильно';
      setRandomNumbers();
    }
  });

  if (modalForm) {
    // Добавляем обработчик события отправки формы
    modalForm.addEventListener('submit', (event) => {
      // Предотвращаем отправку формы по умолчанию
      event.preventDefault();

      // Отправляем данные формы на сервер с помощью AJAX (ваша реализация отправки формы может отличаться)
      const formData = new FormData(modalForm);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', modalForm.action, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          // Если успешно, выводим сообщение об успешной отправке и скрываем форму
          messageErrorModal.innerText = '';
          messageSuccessfulModal.querySelector('span').innerText = 'Отправлено';
          messageSuccessfulModal.style.display = 'flex';
          modalForm.style.display = 'none';
        } else {
          // Обработка ошибок, если нужно
          messageSuccessfulModal.querySelector('span').innerText =
            'Ошибка отправки';
          messageSuccessfulModal.style.display = 'flex';
        }
      };
      xhr.send(formData);
    });
  }
}
