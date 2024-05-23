<div class="modal-window__wrapper-form" id="modal-callback">
    <form action="/custom/functions/submit-form.php" method="post" class="modal-window__form">
        <span class="modal-window__title">Мы вам перезвоним в течение 5 минут</span>
        <div class="modal-window__wrapper-input">
            <label class="modal-window__label" for="nameInput">Как вас зовут</label>
            <input type="text" class="modal-window__input base-input" id="nameInput" name="name" placeholder="Введите имя" required />
        </div>
        <div class="modal-window__wrapper-input">
            <label class="modal-window__label" for="phoneInput">Номер телефона</label>
            <input placeholder="" type="tel" class="modal-window__input base-input" id="phoneInput" name="phone" data-maska="+7 (###) ###-##-##" value="" required />
        </div>

        <div class="modal-window__wrapper-btn">
            <button class="modal-window__btn base-btn">Отправить</button>
        </div>
        <span>Перед тем как отправить свои данные, решите сложение!</span>
        <div class="modal-window__wrapper-captcha">
            <input class="modal-window__check-number" id="aForm" readonly />
            <span class="modal-window__plus">+</span>
            <input class="modal-window__check-number" id="bForm" readonly />
            <span class="modal-window__summa">=</span>
            <input class="modal-window__check-number modal-window__check-number_result" type="number" id="cForm" placeholder="Результат" />
            <div id="messageErrorModal"></div>
            <a class="modal-window__check-btn" id="checkBtnModal">Проверить</a>
        </div>
    </form>
    <div class="modal-window__wrapper-message-form" id="messageSuccessfulModal">
        <span class="modal-window__message-form" id="messageErrorModal"></span>
    </div>
</div>