export default {
    routerCfg: {
        path: '/??',
        component: () => import('@/grupe/etc'),
        props: route => ({ id: route.query.id })
    },
}