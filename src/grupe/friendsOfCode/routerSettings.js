export default {
    routerCfg: {
        path: '/friends-of-code',
        component: () => import('@/grupe/friendsOfCode/views/focFriends.vue'),
        props: route => ({ id: route.query.id })
    },
}