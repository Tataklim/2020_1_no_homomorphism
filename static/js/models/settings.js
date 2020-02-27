import {Validation} from '../modules/validation.js';
import {Api} from "../modules/api.js";

export class SettingsModel {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }

    getUserData() {
        Api.profileFetch()
        .then((res) => {
            if (res.ok) {
                res.text()
                .then((data) => {
                    //this.eventBus.emit('show profile settings', data);
                    this.eventBus.emit('user data', JSON.parse(data));
                })
            } else {
                this.eventBus.emit('invalid', 'Ошибка загрузки профиля')
            }
        })
    }

    resetAvatar(avatar) {
        //...

        const formData = new FormData();
        formData.append('file', image[0]);

        Api.profilePhotoFetch()
        this.eventBus.emit('new avatar', avatar);
    }

    //addOuter(url) {
        //...
    //    this.eventBus.emit('new outer', outer);
    //}

    submit(values) {
        const validation = new Validation;
        const resPassword = validation.validationPassword(values.newPassword, values.newPasswordConfirm);
        const resEmail = validation.validationEmail(values.email);

        if (resPassword !== '') {
            this.eventBus.emit('invalid', {
                newPassword: resPassword,
            });
            return;
        } else if (values.email === '') {
            this.eventBus.emit('invalid', {
                email: 'Удолять email низзя',
            });
        } else if (resEmail !== '') {
            this.eventBus.emit('invalid', {
                email: resEmail,
            });
        }
        this.eventBus.emit('redirect to profile', {});
    }
}
