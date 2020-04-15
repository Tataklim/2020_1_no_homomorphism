import artist from '@views/artist/artist.tmpl.xml';
import BaseView from '@libs/base_view';
import TrackListComponent from '@components/downTrackListComponent/trackListComponent';
import {ARTIST, DOM} from '@libs/constans';
import '@css/base.css';
import PlaylistsComponent from '@components/downPlaylistComponent/playlistListComponent';

/**
 *  вью для страницы артиста
 */
export default class ArtistView extends BaseView {
    /**
     * Конструктор
     * @param {EventBus} eventBus
     * @param {EventBus} globalEventBus
     */
    constructor(eventBus, globalEventBus) {
        super(artist);
        this.data = {};
        this.tracksRendered = 0;
        this.allTracksRendered = true;
        this.albumsRendered = 0;
        this.allAlbumsRendered = true;
        this.id = 0;
        this.currentOpen = '';
        this.trackListComponent = new TrackListComponent(eventBus, ARTIST.RENDER_TRACKS);
        this.playlistsComponent = new PlaylistsComponent(eventBus, ARTIST.RENDER_ALBUMS);
        this.eventBus = eventBus;
        this.globalEventBus = globalEventBus;
        this.eventBus.on(ARTIST.RENDER_DATA, this.renderData.bind(this));
    }

    /**
     * Рендер
     * @param {Object} root
     * @param {string} url
     */
    render(root, url) {
        super.render(document.getElementsByClassName(DOM.CONTENT)[0], url);
        this.analizeUrl(url);
        if (JSON.stringify(this.data) === '{}' || this.id !== this.data.id) {
            this.eventBus.emit(ARTIST.GET_DATA, this.id);
        }
        this.chooseSection(url);
    }

    /**
     * Парсит урл
     * @param {string} url
     */
    analizeUrl(url) {
        this.id = (url.indexOf('/') === -1 ? url : url.slice(0, url.indexOf('/'))
        );
        this.currentOpen = (url.indexOf('/') === -1 ?
            'tracks' :
            url.slice(url.indexOf('/') + 1, url.length));
    }

    /**
     * Определение секции нажатия
     * @param {string} url
     */
    chooseSection(url) {
        const curSection = document.getElementById(`profile-${this.currentOpen}-title`);
        curSection.classList.add(ARTIST.SELECTED_CLASS);
        this.eventBus.emit(`artist-${this.currentOpen}`, '0', '50');
    }

    /**
     * Рендер
     * @param {Object} data
     */
    renderData(data) {
        this.setData(data);
        this.trackListComponent.setId(data.id);
        document.getElementsByClassName('m-top-login')[0].innerHTML = data.name;
        document.getElementsByClassName('m-round-image')[0].src = data.image;
        document.getElementsByClassName('m-top-name')[0].innerHTML = data.genre;
        // eslint-disable-next-line max-len
        document.getElementsByClassName('m-artist-tracks-ref')[0].href = `/artist/${data.id}/tracks`;
        // eslint-disable-next-line max-len
        document.getElementsByClassName('m-artist-albums-ref')[0].href = `/artist/${data.id}/albums`;
        document.getElementsByClassName('m-artist-info-ref')[0].href = `/artist/${data.id}/info`;
        document.getElementById('artist-tracks-title').innerText = data.tracks;
        document.getElementById('artist-albums-title').innerText = data.albums;
    }
}
