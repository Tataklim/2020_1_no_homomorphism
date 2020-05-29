import Api from '@libs/api';
import {RESPONSE, POPUP} from '@libs/constants';
import PopUp from '@components/pop-up/pop-up';

/**
 * Компонент трек
 */
export default class TrackComponent {
    /**
     * конструктор
     */
    constructor() {
        this._trackData = {};
    }

    /**
     * Запись данных о треке
     * @param {Object} data
     */
    set trackData(data) {
        this._trackData = data;
    }

    /**
     * Получение плейлистов трека
     * @param {string} trackID
     * @param {function} callback
     */
    getTrackPlaylists(trackID, callback) {
        Api.trackPlaylistsGet(trackID).then((res) => {
            switch (res.status) {
            case RESPONSE.OK:
                res.json().then((elem) => {
                    callback(elem.playlists);
                });
                break;
            case RESPONSE.BAD_REQUEST:
                break;
            default:
                console.log(res);
                console.error('I am a teapot');
            }
        });
    }

    /**
     * Добавление трека в плейлист
     * @param {string} playlistID
     * @param {function} callback
     */
    addToPlaylist(playlistID, callback) {
        const data = {
            'playlist_id': playlistID,
            'track_id': this._trackData.id,
            'image': this._trackData.image,
        };
        Api.playlistTrackPost(data).then((res) => {
            switch (res.status) {
            case RESPONSE.OK:
                callback(playlistID);
                break;
            case RESPONSE.BAD_REQUEST:
                new PopUp(POPUP.TRACK_ADDITION_ERROR_MESSAGE, true);
                break;
            default:
                console.log(res);
                console.error('I am a teapot');
            }
        });
    }

    /**
     * Удлаение трека из плейлиста
     * @param {number} playlistID
     * @param {function} callback
     */
    delFromPlaylist(playlistID, callback) {
        Api.playlistTrackDelete(playlistID.toString(), this._trackData.id).then((res) => {
            switch (res.status) {
            case RESPONSE.OK:
                if (callback) {
                    callback(playlistID);
                } else {
                    new PopUp(POPUP.TRACK_DELETION_MESSAGE);
                }
                break;
            case RESPONSE.BAD_REQUEST:
                new PopUp(POPUP.TRACK_DELETION_ERROR_MESSAGE, true);
                break;
            default:
                console.log(res);
                console.error('I am a teapot');
            }
        });
    }
}
