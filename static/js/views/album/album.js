import {ALBUM, GLOBAL, POPUP, URL, PAGINATION} from '@libs/constants';
import playlist from '@views/album/album.tmpl.xml';
import BaseView from '@libs/base_view';
import TrackListComponent from '@components/track_list/track_list';
import {globalEventBus} from '@libs/eventBus';
import User from '@libs/user';
import PopUp from '@components/pop-up/pop-up';
import {inputSanitize} from '@libs/input_sanitize';

/**
 *  вью для входа
 */
export default class AlbumView extends BaseView {
    /**
     * @param {EventBus} eventBus
     */
    constructor(eventBus) {
        super(playlist);
        this.eventBus = eventBus;
        this.albumData = {};
        this.tracksData = {};
        this.trackListComponent = new TrackListComponent(eventBus, ALBUM);
        this.eventBus.on(ALBUM.RENDER_ALBUM, this.setAlbumData.bind(this));
        this.eventBus.on(ALBUM.ERROR, this.showErrors.bind(this));
        this.eventBus.on(ALBUM.SET_TRACKS_AMOUNT, this.setTracksAmount.bind(this));
        this.eventBus.on(POPUP.NEW, (message, error = false) => {
            new PopUp(message, error);
        });
    }

    /**
     * рендерит страницу плейлиста
     *  @param {Object} root
     *  @param {string} url
     */
    render(root, url) {
        this.rendered = 0;
        globalEventBus.emit(GLOBAL.COLLAPSE_IF_MOBILE);
        super.render(root);
        this.eventBus.emit(ALBUM.GET_ALBUM_DATA, {id: url});
        this.eventBus.emit(ALBUM.GET_TRACKS_DATA, url, this.rendered.toString(),
            (this.rendered + PAGINATION['tracks']).toString());
        this.rendered += PAGINATION['tracks'];
    }

    /**
     * Вставляет необходимые данные альбома
     * @param {Object} album
     */
    setAlbumData(album) {
        this.albumData = album;
        this.renderAlbum();
    }

    /**
     * Выводит данные альбома
     */
    renderAlbum() {
        document.getElementsByClassName('m-big-name')[0].innerHTML =
            inputSanitize(this.albumData.name);
        document.getElementsByClassName('m-rounded-image')[0].src =
            inputSanitize(this.albumData.image);
        if (this.albumData.is_liked) {
            this._changeLike();
        }
    }

    /**
     * рендерит ещё
     */
    renderMore() {
        if (document.getElementsByClassName('l-down-card')[0].getBoundingClientRect().bottom <=
            document.documentElement.clientHeight &&
            this.rendered < this.albumData.tracks
        ) {
            this.eventBus.emit(ALBUM.GET_TRACKS_DATA, this.albumData.id, this.rendered.toString(),
                (this.rendered + PAGINATION['tracks']).toString());
            this.rendered += PAGINATION['tracks'];
        }
    }

    /**
     * Слушает события
     */
    setEventListeners() {
        document.getElementsByClassName('l-button-middle-play')[0].addEventListener('click',
            this.playAlbum.bind(this));
        document.getElementsByClassName('l-button-middle-play')[0]
            .addEventListener('touchend', (event) => {
                event.preventDefault();
                let target = event.target;
                while (!target.classList.contains('l-button-middle-play')) {
                    target = target.parentNode;
                }
                event.target.classList.add('touched');
                setTimeout(() => event.target.classList.remove('touched'), 300);
                event.target.click();
            });
        document.getElementsByClassName('m-large-like-button')[0].addEventListener('click',
            this._likeClicked.bind(this));
        window.addEventListener('scroll', this.renderMore.bind(this));
    }

    /**
     * Clicked like track
     */
    _likeClicked() {
        if (!User.exists()) {
            globalEventBus.emit(GLOBAL.REDIRECT, URL.LOGIN);
            return;
        }
        this._changeLike();
        this.eventBus.emit(ALBUM.LIKE, this.albumData.id);
    }

    /**
     * Change like
     */
    _changeLike() {
        const domItem = document.getElementsByClassName('m-large-like-button')[0];
        domItem.classList.toggle('is-liked');
        domItem.classList.toggle('is-not-liked');
    }

    /**
     * Вставляет необходимые данные треков
     * @param {Object} tracks
     */
    setTracksAmount(tracks) {
        this.tracksData = tracks;
        this.setEventListeners();
        if (this.tracksData.length === 0) {
            return;
        }
        document.getElementsByClassName('m-tracks-amount')[0].innerHTML = inputSanitize(
            this.tracksData.length + (this.tracksData.length !== 1 ? ' tracks' : ' track'));
    }

    /**
     * Проигрование альбома
     */
    playAlbum() {
        globalEventBus.emit(GLOBAL.PLAY_ALBUM, this.albumData.id);
    }

    /**
     * Выводит ошибку
     * @param {Object} error
     */
    showErrors(error) {
        document.getElementsByClassName('l-top-card')[0].innerHTML = inputSanitize(error.text);
        document.getElementsByClassName('l-top-card')[0].classList.add('is-error');
        document.getElementsByClassName('l-down-card')[0].classList.add('is-not-displayed');
    }
}
