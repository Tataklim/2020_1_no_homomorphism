import ProfileTracksModel from '@models/profile/profile_tracks';
import ProfileTracksView from '@views/profile/profile_tracks';

/**
 * Контроллер для треков профиля
 */
export class ProfileTracksController {
    /**
     * Конструктор
     * @param {Router} router
     * @param {EventBus} eventBus
     */
    constructor(router, eventBus) {
        this.eventBus = eventBus;
        this.model = new ProfileTracksModel(this.eventBus);
        this.view = new ProfileTracksView(this.eventBus);
    }
}
