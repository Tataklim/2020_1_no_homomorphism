import EventBus from '@libs/eventBus.js';
import AlbumModel from '@models/album';
import AlbumView from '@views/album/album';
import {ALBUM} from '@libs/constans.js';

/**
 * Контроллер для страницы плейлиста
 */
export class AlbumController {
    /**
     * Конструктор
     * @param {Router} router
     * @param {EventBus} globalEventBus
     */
    constructor(router, globalEventBus) {
        this.eventBus = new EventBus();
        this.model = new AlbumModel(this.eventBus, globalEventBus);
        this.view = new AlbumView(this.eventBus, globalEventBus);
        this.eventBus.on(ALBUM.REDIRECT, router.redirect.bind(router));
    }
}