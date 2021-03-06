import news from '@views/news/news.tmpl.xml';
import newsSection from '@views/news/news_section.tmpl.xml';
import newsAlbums from '@views/news/news_albums.tmpl.xml';
import BaseView from '@libs/base_view';
import {MAIN, GLOBAL} from '@libs/constants';
import {globalEventBus} from '@libs/eventBus';

/**
 *  вью для главной
 */
export default class NewsView extends BaseView {
    /**
     * Конструктор
     * @param {EventBus} eventBus
     */
    constructor(eventBus) {
        super(news);
        this.eventBus = eventBus;
        this.eventBus.on(MAIN.RENDER_SUBSCRIPTIONS, this.renderList.bind(this));
        this.eventBus.on(MAIN.RENDER_TRACKS_LIST, this.renderList.bind(this));
        this.eventBus.on(MAIN.RENDER_ARTISTS, this.renderList.bind(this));
        this.eventBus.on(MAIN.RENDER_NEWS_SECTION, this.renderList.bind(this));
        this.eventBus.on(MAIN.RENDER_NEWS_LIST, this.renderNewsList.bind(this));
        globalEventBus.on(GLOBAL.HIDE_SUBSCRIPTIONS, () => {
            if (!document.getElementsByClassName('subscriptions-section')[0]) {
                return;
            }
            document.getElementsByClassName('subscriptions-section')[0]
                .parentNode.parentNode.remove();
        });
    }

    /**
     * рендерит главную страничку
     * @param {Object} root
     * @param {string} url
     */
    render(root, url) {
        globalEventBus.emit(GLOBAL.COLLAPSE_IF_MOBILE);
        super.render(root, url);
        this.eventBus.emit(MAIN.GET_SUBSCRIPTIONS_DATA);
        this.eventBus.emit(MAIN.GET_TRACKS_DATA);
        this.eventBus.emit(MAIN.GET_WORLDS_NEWS);
        this.eventBus.emit(MAIN.GET_ARTISTS_DATA);
    }

    /**
     * Рендер
     * @param {Object} data
     */
    renderList(data) {
        const node = document.getElementsByClassName(data.domItem)[0];
        if (node === null) {
            return;
        }
        node.innerHTML = newsSection(data);
        node.classList.remove(data.domItem);
        node.classList.remove('m-empty-section');
        if (!data.ok) {
            return;
        }
        node.firstChild.lastChild.classList.add(data.domItem);
    }

    /**
     * Отрисовка списка новостей
     * @param{Object} data
     */
    renderNewsList(data) {
        const node = document.getElementsByClassName(data.domItem)[0];
        if (node === null || node === undefined) {
            return;
        }
        const curDate = new Date().getTime();
        // eslint-disable-next-line guard-for-in
        for (const i in data.news) {
            const sep = data.news[i].release.split('-');
            const releaseDate = new Date(sep[1] + '/' + sep[0] + '/' + sep[2]);
            const diffTime = curDate - releaseDate.getTime();
            data.news[i].release = this.setTimePeriod(diffTime / (1000 * 3600 * 24));
        }
        node.innerHTML = newsAlbums(data.news);
    }

    /**
     * Set time period
     * @param {number} dif
     * @return {String} time from current day
     */
    setTimePeriod(dif) {
        if (dif < 1) {
            return 'Today';
        }
        if (dif < 8) {
            return Math.floor(dif) + ' days ago';
        }
        if (dif < 31) {
            return Math.floor(dif / 7) + ' weeks ago';
        }
        return Math.floor(dif / 31) + ' months ago';
    }
}
