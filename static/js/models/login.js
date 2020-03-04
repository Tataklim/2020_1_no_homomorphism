import {Api} from '../modules/api.js';
import {Validation} from '../modules/validation.js';

/**
 * Модель для страницы входа
 */
export class LoginModel {
    /**
     * Конструктор
     * @param eventBus {EventBus}
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.eventBus.on('submit', this.submit.bind(this));
    }

    /**
     * отправка формы
     * @param values
     */
    submit(values) {
        const validation = new Validation;

        const resLogin = validation.validationLogin(values.login);
        const resPassword = validation.validationPassword(values.password, values.passwordConfirm);

        const errors = {};
        if (resLogin !== '') {
            errors.login = resLogin;
        }
        if (resPassword !== '') {
            errors.password = resPassword;
        }
        if (JSON.stringify(errors) !== '{}') {
            this.eventBus.emit('invalid', errors);
        } else {
            Api.loginFetch(values.login, values.password)
            .then((res) => {
                if (res === undefined) {
                    this.eventBus.emit('redirect to main', 'No answer from backend');
                    return;
                }
                if (res.ok) {
                    this.eventBus.emit('hide login, show logout', {});
                } else {
                    this.eventBus.emit('invalid', {global: 'Login error'});
                }
            });
        }
    }

    /*changeRemember(state) {
        this.data.remember = state;
    }*/
}
