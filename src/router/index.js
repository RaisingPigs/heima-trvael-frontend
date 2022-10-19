import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return {y: 0};
    }
});


router.afterEach((to, from) => {
    document.title = to.meta.title;
});

export default router;
