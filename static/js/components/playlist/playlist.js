import Api from '@libs/api';
import {GLOBAL, RESPONSE, URL, POPUP} from '@libs/constants';
import {globalEventBus} from '@libs/eventBus';
import PopUp from '@components/pop-up/pop-up';

/**
 * Компонент трек
 */
export default class PlaylistComponent {
    /**
     * конструктор
     * @param {function} _setEventListeners
     */
    constructor(_setEventListeners) {
        this._setEventListeners = _setEventListeners;
    }
    /**
     * Получение плейлистов пользователя
     * @param {function} callback
     */
    getProfilePlaylistsApi(callback) {
        Api.profilePlaylistsGet().then((res) => {
            switch (res.status) {
            case RESPONSE.OK:
                res.json().then((list) => {
                    callback(list.playlists);
                });
                break;
            case RESPONSE.UNAUTH:
            case RESPONSE.NO_ACCESS_RIGHT:
                globalEventBus.emit(GLOBAL.REDIRECT, URL.SIGN_UP);
                break;
            case RESPONSE.BAD_REQUEST:
            default:
                console.log(res);
                console.error('I am a teapot');
            }
        });
    }

    /**
     * Создание плейлиста
     * @param {function} callback
     * @param {string} playlistName
     */
    createPlaylist(callback, playlistName) {
        Api.playlistPost(playlistName).then((res) => {
            switch (res.status) {
            case RESPONSE.OK_ADDED:
                res.json().then((res) => {
                    callback({
                        'name': playlistName,
                        'id': res.playlist_id,
                    });
                    this._setEventListeners();
                });
                new PopUp(POPUP.PLAYLIST_CREATION_MESSAGE);
                break;
            case RESPONSE.BAD_REQUEST:
                new PopUp(POPUP.PLAYLIST_CREATION_ERROR_MESSAGE, true);
                break;
            default:
                console.log(res);
                console.error('I am a teapot');
            }
        });
    }
}
