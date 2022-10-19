export default [
    {
        path: '/',
        redirect: '/search'
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search'),
        meta: {isAuth: false, title: '搜索'}
    }
]
