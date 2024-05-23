// Импорт библиотеки Swiper и необходимых модулей (Navigation, Pagination, Thumbs)
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Импорт CSS стилей для Swiper и его модулей
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Использование модулей Navigation, Pagination и Thumbs в Swiper
Swiper.use([Navigation, Autoplay, Pagination]);
const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
// Опции для различных слайдеров
const options = {
  swiperReviews: {
    modules: [],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  },
};

// Функция для генерации опций для указанного имени слайдера
function generateOptions(name) {
  return options[name];
}

// Функция для инициализации экземпляра Swiper для указанного контейнера
function initSwiper(swiperContainer) {
  // Находим элемент слайдера внутри контейнера, используя атрибут данных
  const sliderElement = swiperContainer.querySelector('[data-slider-name]');
  const name = sliderElement.dataset.sliderName;

  // Получаем опции для конкретного слайдера
  const newOptions = generateOptions(name);

  // Если опции не найдены, завершаем инициализацию
  if (!newOptions) {
    return;
  }

  // Находим элементы навигации (кнопки "вперед" и "назад") в контейнере
  const nextEl = swiperContainer.querySelector('.js-swiper-button-next');
  const prevEl = swiperContainer.querySelector('.js-swiper-button-prev');

  // Если элементы навигации найдены, включаем модуль Navigation и устанавливаем опции
  if (nextEl && prevEl) {
    newOptions.navigation = {
      nextEl,
      prevEl,
    };
  }

  const paginationElement = swiperContainer.querySelector(
    '.js-swiper-pagination'
  );

  // Если элемент пагинации найден, включаем модуль Pagination и устанавливаем опцию
  if (paginationElement) {
    newOptions.pagination = {
      el: paginationElement,
    };
  }

  // Инициализируем новый экземпляр Swiper с элементом слайдера и опциями
  // eslint-disable-next-line no-new
  new Swiper(sliderElement, newOptions);
}

// Находим все элементы с классом 'js-sliders' (swiperContainers)
const swiperContainers = document.querySelectorAll('.js-sliders');

// Если найдены контейнеры Swiper, инициализируем Swiper для каждого из них
if (swiperContainers.length) {
  swiperContainers.forEach(initSwiper);
}
