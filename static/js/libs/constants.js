export const SERVER_PATH = 'https://virusmusic.fun';

export const API = '/api/v1';

export const RESPONSE = {
    OK: 200,
    OK_ADDED: 201,
    BAD_REQUEST: 400,
    UNAUTH: 401,
    NO_ACCESS_RIGHT: 403,
    EXISTS: 409,
    SERVER_ERROR: 500,
};

export const DOM = {
    CONTENT: 'l-content',
    PLAYER: 'l-player',
    NAVBAR: 'l-navbar',
    TOP_CONTENT: 'l-top-content',
};

export const URL = {
    MAIN: '/',
    NAVBAR: 'navbar',
    PLAYER: 'player',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    PROFILE: '/profile',
    PROFILE_TRACKS: '/profile/tracks',
    PROFILE_ALBUMS: '/profile/albums',
    PROFILE_PLAYLISTS: '/profile/playlists',
    PROFILE_ARTISTS: '/profile/artists',
    SETTINGS: '/settings',
    ARTIST: /(\/artist\/)[0-9]+(\/albums|\/tracks|\/info)*/,
    PLAYLIST: /(\/playlist\/)[0-9]+/,
    ALBUM: /(\/album\/)[0-9]+/,
    SEARCH: /(\/search\/)(.)+/,
};

export const PAGINATION = {
    ALBUMS: 20,
    TRACKS: 50,
    TRACK_HEIGHT: 54,
};

export const LAYOUT = {
    MOBILE: 'screen and (max-width: 480px) and (min-width: 344px)',
    TABLET: 'screen and (min-width: 481px) and (max-width: 1106px)',
    DESKTOP: 'min-width: 988px',
};

export const VALIDATION = {
    REGEX_EMAIL: '(.)+@(.)+',
    REGEX_LOGIN: '^[a-zA-Z0-9_.]{3,}$',
    REGEX_PASSWORD: '^[a-zA-Z0-9]{3,}$',
    ALLOWABLE_EXTENSIONS: ['png', 'jpg', 'jpeg', 'gif'],
};

export const GLOBAL = {
    PLAY_ARTIST_TRACKS: 'global-play-artist-tracks',
    PLAY_PLAYLIST_TRACKS: 'global-play-playlist-tracks',
    PLAY_ALBUM_TRACKS: 'global-play-album-tracks',
    PLAY_TRACKS: 'global-play-track-tracks',
    PLAY_PLAYLIST: 'global-play-playlist',
    PLAY_ALBUM: 'global-play-album',
    ADD_TO_QUEUE: 'global-add-to-queue',
    CLEAR_AND_LOCK: 'global-clear-and-lock',
    COLLAPSE: 'global-collapse',
    COLLAPSE_AND_LOCK: 'global-collapse-and-lock',
    COLLAPSE_IF_MOBILE: 'global-collapse-if-mobile',
    REDIRECT: 'redirect',
    HREF: 'global-href',
    LOGOUT_REDIRECT: 'global-logout-redirect',
    LOGIN_REDIRECT: 'global-login-redirect',
    CLOSE_SEARCH: 'global-close-search',
    PAUSE: 'global-pause',
    HIDE_SUBSCRIPTIONS: 'hide subscriptions',
    RENDER_THEME: 'render theme',
    RENDER_LOGGED: 'render-new-avatar',
    RERENDER_BECAUSE_OF_LANGUAGE: 'global-rerender',
};

export const MAIN = {
    GET_SUBSCRIPTIONS_DATA: 'get-all-subscriptions-data',
    GET_TRACKS_DATA: 'get-all-tracks-data',
    GET_ARTISTS_DATA: 'get-all-artists-data',
    GET_WORLDS_NEWS: 'get-world-news',
    RENDER_SUBSCRIPTIONS: 'render subscriptions',
    RENDER_NEWS_SECTION: 'render-news-section',
    RENDER_TRACKS: 'render tracks',
    RENDER_ARTISTS: 'render artist kek',
    RENDER_SUBSCRIPTIONS_LIST: 'render subscriptions list',
    RENDER_NEWS_LIST: 'render news list',
    RENDER_TRACKS_LIST: 'render tracks list',
    NO_ANSWER: 'no-answer',
    RENDER_ARTISTS_LIST: 'render artists list',
};

export const LOGIN = {
    INVALID: 'login-invalid',
    SUBMIT: 'login-submit',
    LOGIN_SUCCESS: 'login-success',
    CLOSE: 'login-close',
};

export const NAVBAR = {
    HEIGHT: 60,
    LOGIN_SUCCESS: 'navbar-login-success',
    CHECK_COOKIE: 'navbar-check-cookie',
    DRAW_COOKIE_RESULT: 'navbar-draw-cookie-result',
    RENDER_LOGGED: 'navbar-logged-in',
    RENDER_NOT_LOGGED: 'navbar-guest',
    GET_USER_DATA: 'navbar-get-user-data',
    LOGOUT_CLICKED: 'navbar-logout-clicked',
};

export const PLAYER = {
    GET_TRACK: 'player-get-track',
    GET_TRACKS: 'player-get-tracks',
    RESIZE: 'player-resize',
    PAUSE: 'player-pause',
    PLAY: 'player-play',
    PREVIOUS: 'player-previous-track',
    NEXT: 'player-next-track',
    REWIND: 'player-rewind',
    SHUFFLE: 'player-shuffle',
    UNSHUFFLE: 'player-unshuffle',
    REPEAT: 'player-repeat',
    REPEAT_ONE: 'player-repeat-one',
    UNREPEAT: 'player-unrepeat',
    MUTE: 'player-mute',
    UNMUTE: 'player-unmute',
    CHANGE_ORDER: 'player-change-order',
    DELETE: 'player-delete',
    LIKE: 'player-like',
    ADD: 'player-add',
    ADD_TO_QUEUE: 'player-add-to-queue',
    DRAW_PLAY: 'player-draw-play',
    DRAW_PAUSE: 'player-draw-pause',
    TRACK_UPDATE: 'player-track-update',
    MOVE_MARKER: 'player-move-marker',
    MOVE_MARKER_TO_CURRENT: 'player-move-marker-to-current',
    DRAW_TRACKLIST: 'player-draw-tracklist',
    REMOVE_FROM_TRACKLIST: 'player-remove-from-tracklist',
    REMOVE_FROM_TRACKLIST_ALL: 'player-remove-from-tracklist-all',
    DRAW_TIMELINE: 'player-draw-timeline',
    DRAW_SHUFFLE: 'player-draw-shuffle',
    DRAW_UNSHUFLE: 'player-draw-unshuffle',
    DRAW_REPEAT: 'player-draw-repeat',
    DRAW_REPEAT_ONE: 'player-draw-repeat-one',
    DRAW_UNREPEAT: 'player-draw-unrepeat',
    DRAW_MUTE: 'player-draw-mute',
    DRAW_UNMUTE: 'player-draw-unmute',
};

export const SETTINGS = {
    GET_USER_DATA: 'settings-get-user-data',
    GET_CSRF_TOKEN: 'settings-get-csrf-token',
    RENDER_LOGGED: 'settings-logged-in',
    AVATAR_UPLOAD: 'settings-avatar-upload',
    SUBMIT: 'settings-submit',
    SUBMIT_PASSWORD: 'settings-submit-password',
    INVALID: 'settings-invalid',
};

export const SIGN_UP = {
    LOGIN_SUCCESS: 'signup-success',
    SUBMIT: 'signup-submit',
    INVALID: 'signup-invalid',
    CLOSE: 'signup-close',
};

export const PROFILE = {
    SELECTED_CLASS: 'is-touched-section',
    // --
    ID_TRACKS_SECTION: 'profile-tracks-title',
    ID_PLAYLISTS_SECTION: 'profile-playlists-title',
    ID_ALBUMS_SECTION: 'profile-albums-title',
    ID_ARTISTS_SECTION: 'profile-artists-title',
    // --
    GET_DATA: 'profile-get-profile-data',
    GET_STAT: 'profile-get-profile-stat',
    GET_TRACKS: 'profile-get-profile-tracks',
    RENDER_DATA: 'profile-render-profile-data',
    RENDER_STAT: 'profile-render-profile-stat',
    CHOOSE_SECTION: 'profile-choose-section',
    // --
    RENDER_TRACKS: 'profile-render-profile-track',
    RENDER_PLAYLISTS: 'profile-render-profile-playlist',
    RENDER_ALBUMS: 'profile-render-profile-album',
    RENDER_ARTISTS: 'profile-render-profile-artist',
    // --
    SET_PLAYLIST_ID: 'profile-set-playlist-id',
    SET_ALBUM_ID: 'profile-set-album-id',
    CHANGE_PLAYLIST_AMOUNT: 'profile-change-playlist-amount',
    DROPDOWN: 'profile-dropdown',
    CHANGE_TRACK_AMOUNT: 'profile-change-tracks-amount',
};

export const ARTIST = {
    SELECTED_CLASS: 'is-touched-section',
    SET_ID: 'artist-set-id',
    ID_TRACKS_SECTION: 'artist-tracks',
    ID_ALBUMS_SECTION: 'artist-albums',
    ID_INFO_SECTION: 'artist-info',
    SUBSCRIBE: 'artist-subscribe',
    DRAW_SUBSCRIBE: 'artist-draw-subscribe',
    GET_DATA: 'artist-get-artist-data',
    RENDER_DATA: 'artist-render-artist-data',
    RENDER_TRACKS: 'artist-render-track',
    RENDER_ALBUMS: 'artist-render-album',
    RENDER_INFO: 'artist-render-info',
    // --
    SET_ARTIST_ID: 'artist-set-artist-id',
    DROPDOWN: 'artist-dropdown',
    NEW_RECIEVED: 'artist-new-recieved',
};

export const PLAYLIST = {
    DROPDOWN: 'playlist-dropdown',
    SET_TRACKS_AMOUNT: 'playlist-set-tracks-amount',
    SET_PLAYLIST_ID: 'playlist-set-id',
    GET_PLAYLIST_DATA: 'playlist-get-playlist-data',
    GET_TRACKS_DATA: 'playlist-get-tracks-data',
    RENDER_DATA: 'playlist-render-playlist',
    RENDER_NAME: 'playlist-render-name',
    RENDER_IMAGE: 'playlist-render-image',
    RENDER_PLAYLIST_DATA: 'playlist-render-playlist-data',
    RENDER_TRACKS: 'playlist-render-tracks-data',
    RENDER_EDIT: 'playlist-render-edit',
    DELETE_PLAYLIST: 'playlist-delete',
    ERROR: 'playlist-show-errors',
    RENDER_DELETED: 'playlist-render-deleted',
    CHANGE_TRACK_AMOUNT: 'playlist-change-track-amount',
    CHANGE_PRIVACY: 'playlist-privacy',
    CHANGE_NAME: 'playlist-name',
    CHANGE_IMAGE: 'playlist-image',
    ADD_PLAYLIST: 'playlist-add',
    INVALID: 'playlist-invalid',
    CHECK_COOKIE: 'check-user-cookie',
};

export const ALBUM = {
    GET_ALBUM_DATA: 'album-get-album-data',
    GET_TRACKS_DATA: 'album-get-tracks-data',
    RENDER_ALBUM: 'album-render-album',
    RENDER_TRACKS: 'album-render-tracks',
    NEW_RECIEVED: 'album-new-recieved',
    SET_TRACKS_AMOUNT: 'album-set-tracks-amount',
    SET_ALBUM_ID: 'set-album-id',
    LIKE: 'album-like',
    ERROR: 'album-show-errors',
};

export const SEARCH = {
    AMOUNT_TOP: '3',
    AMOUNT: '10',
    INTERVAL: 0,
    GET_DATA: 'search-get-data',
    RENDER_DATA: 'search-render-data',
    RENDER_ALBUMS: 'search-render-albums',
    RENDER_ARTISTS: 'search-render-artists',
    RENDER_TRACKS: 'search-render-tracks',
    SET_LISTENERS: 'search-set-listeners',
};

export const POPUP = {
    NEW: 'new pop-up',
    LIFETIME: 2000,
    DISSOLUTIONTIME: 1000,
};

export const THEME_OVERLAY = {
    'light': 'white',
    'dark': '#383b40',
    'special': 'white',
};

export const THEME = {
    'light': {
        'green': [
            ['--selected-elem', '#d6ffeb'],
            ['--marker-color', '#00e676'],
            ['--button-color', '#0ab992'],
        ],
        'red': [
            ['--selected-elem', '#ffe0e4'],
            ['--marker-color', '#ff2137'],
            ['--button-color', '#ff4255'],
        ],
        'purple': [
            ['--selected-elem', '#f9d4ff'],
            ['--marker-color', '#ab47bc'],
            ['--button-color', '#7b1fa2'],
        ],
        'blue': [
            ['--selected-elem', '#d0eaff'],
            ['--marker-color', '#29b6f6'],
            ['--button-color', '#186db1'],
        ],
        'black': [
            ['--selected-elem', '#dcdcdc'],
            ['--marker-color', 'black'],
            ['--button-color', '#1d1d1d'],
        ],
    },
    'dark': {
        'green': [
            ['--selected-elem', '#2d9c66'],
            ['--marker-color', '#2d9c66'],
            ['--button-color', '#2d9c66'],
        ],
        'pink': [
            ['--selected-elem', '#de4a7d'],
            ['--marker-color', '#de4a7d'],
            ['--button-color', '#de4a7d'],
        ],
        'purple': [
            ['--selected-elem', '#7b1fa2'],
            ['--marker-color', '#7b1fa2'],
            ['--button-color', '#7b1fa2'],
        ],
        'blue': [
            ['--selected-elem', '#01579b'],
            ['--marker-color', '#01579b'],
            ['--button-color', '#01579b'],
        ],
    },
    'special': {
        'lsd': [
            ['--selected-elem', '#dcc4ff'],
            ['--marker-color', '#6900ff'],
            ['--button-color', '#6900ff'],
        ],
    },
};
