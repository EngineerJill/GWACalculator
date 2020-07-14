import Vue from 'vue'
import Router from 'vue-router'
import Calc from '@/components/Calc'
import Sublist from '@/components/Sublist'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Calc',
            component: Calc
        },
        {
            path: '/sublist',
            name: 'Sublist',
            component: Sublist
        }

    ]
})