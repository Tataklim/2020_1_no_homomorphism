import {Api} from "../modules/api.js";
export class LoginModel {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.data = {
            /* Дефолтные значения. Наверное, надо бы их именно здесь сохранять,
            *  чтобы после неудачного сабмита возвращать в форму
            */
            login: '',
            password: '',
            remember: false,
        };

        //this.eventBus.on('submit', this.submit);
        //this.eventBus.on('remember changed', this.changeRemember);
    }

    logout() {
        Api.logoutFetch();
    }

    submit(values) {
        if (values.login.empty) {
            this.eventBus.emit('invalid', 'Введите логин/email!')
        } else if (values.password.empty) {
            this.eventBus.emit('invalid', 'Введите пароль!')
        } else {
            console.log('LOGIN');
            Api.loginFetch(values.login, values.password)
                .then((res)=> {
                    if (res === undefined){
                        console.log('-----Server error');
                        this.eventBus.emit('redirect to main', 'Ошибка загрузки логина');
                        return
                    }
                    if (res.ok) {
                        console.log('-----SUCCESS');
                        this.eventBus.emit('redirect to main', 'Успешный вход');
                    } else {
                        console.log('-----ENTRY ERROR');
                        this.eventBus.emit('invalid', 'Ошибка входа!')
                    }
                })
        }
        console.log('REDIRECT');
        this.eventBus.emit('redirect to main', {});
    }

    changeRemember(state) {
        this.data.remember = state;
    }
}
