import { createStore } from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed';
import popularTags from './modules/popularTags';
import article from './modules/article';
import createArticle from './modules/createArticle';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        feed,
        popularTags,
        article,
        createArticle,
    },
});
