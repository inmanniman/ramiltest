<section class="feedback container">
    <div class="feedback__wrapper-img">
        <img src="/images/form.png" alt="Форма" class="feedback__img" width="400" height="400">
    </div>
    <form action="/custom/functions/submit-form.php" method="post" class="feedback__form">
        <span class="feedback__title">Остались вопросы, мы перезвоним в течение 15 минут.</span>
        <div class="feedback__wrapper-input">
            <label class="feedback__label" for="nameInput">Как вас зовут</label>
            <input type="text" class="feedback__input base-input" id="nameInput" name="name" placeholder="Введите имя" required />
        </div>
        <div class="feedback__wrapper-input">
            <label class="feedback__label" for="phoneInput">Номер телефона</label>
            <input placeholder="" type="tel" class="feedback__input base-input" id="phoneInput" name="phone" data-maska="+7 (###) ###-##-##" value="" required />
        </div>

        <div class="feedback__wrapper-btn">
            <button class="feedback__btn base-btn">Отправить</button>
        </div>
        <span>Перед тем как отправить свои данные, решите сложение!</span>
        <div class="feedback__wrapper-captcha">
            <input class="feedback__check-number" id="a" readonly />
            <span class="feedback__plus">+</span>
            <input class="feedback__check-number" id="b" readonly />
            <span class="feedback__summa">=</span>
            <input class="feedback__check-number feedback__check-number_result" type="number" id="c" placeholder="Результат" />
            <div id="message"></div>
            <a class="feedback__check-btn" id="checkBtn">Проверить</a>
        </div>
    </form>
    <div class="feedback__wrapper-message-form" id="messageForm">
        <span class="feedback__message-form" id="message"></span>
    </div>
</section>