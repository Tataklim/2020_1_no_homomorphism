/**
 * вью для настроек
 */
export class SettingsView {
    /**
     * @param {EventBus} eventBus
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.eventBus.on('invalid', this.showErrors);
        this.eventBus.on('user data', this.prerender.bind(this));
        this.eventBus.emit('get user data', {});
    }

    /**
     * слушатель событий для аватарки
     */
    setEventListeners() {
        const button = document.getElementById('submit-changes');
        button.addEventListener('click', (event) => {
            event.preventDefault();
            this.submit();
        });
        const fileAttach = document.getElementById('avatar-upload');
        fileAttach.addEventListener('change', () => {
            console.log('CATCH TOUCH');
            this.eventBus.emit('avatar upload');
        });
    }

    /**
     * Проверяет, залогинен ли пользователь
     * @param {Object} root
     */
    render(root) {
        root.innerHTML = this.template;
        this.setEventListeners();
    }

    /**
     * Получает данные пользователя
     * @param {Object} data
     */
    prerender(data) {
        // eslint-disable-next-line no-undef
        this.template = nunjucks.render('../../../views/settings.njk', data);
    }

    /**
     * показывает, какие поля формы заполнены неправильно
     * @param {Object} errors
     */
    showErrors(errors) {
        // eslint-disable-next-line guard-for-in
        for (const key in errors) {
            const message = document.getElementById(key).nextElementSibling;
            message.previousElementSibling.style.borderColor =
                (message.getAttribute('class').indexOf('warning') !== -1 ? '#ffae42' : 'red');
            message.innerText = errors[key];
            message.style.height = '15px';
            message.style.marginBottom = '10px';
            message.style.visibility = 'visible';
        }
    }

    /**
     * отправляет данные формы
     */
    submit() {
        console.log('submit-changes clicked');
        document.querySelectorAll('.info input').forEach((input) => {
            input.style.borderColor = '#ccc';
            input.nextElementSibling.innerText = '';
            input.nextElementSibling.style.height = '0';
            input.nextElementSibling.style.marginBottom = '0';
            input.nextElementSibling.style.visibility = 'hidden';
        });
        this.eventBus.emit('submit', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            newPassword: document.getElementById('newPassword').value,
            newPasswordConfirm: document.getElementById('newPasswordConfirm').value,
            password: document.getElementById('password').value,
            // outer              : document.getElementById('outer-url').value,
        });
    }

    // addOuterClick() {
    //    this.eventBus.emit('add outer', document.getElementById('outer-url').value);
    // }
}
