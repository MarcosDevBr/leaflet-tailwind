export default class paths {
    static root = '/';

    static home = {
        root: '/home',

        map: {
            root: '/home/map',
            map: '/home/map/:IdGym',
            goTo: (IdGym?: number | string) => `/home/map${IdGym ? `/${IdGym}` : ''}`,
        },
    };

    static settings = {
        root: '/settings',

        generalSettings: '/settings/generalSettings',
    };

    static global = {
        root: '/global',
    }
}
