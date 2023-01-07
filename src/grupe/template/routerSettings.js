export default {
    routerDefaultConfig: {
        path: '/??',
        component: () => import('@/grupe/etc'),
        props: route => ({ id: route.query.id })
    },
}