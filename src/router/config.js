/**
 * 
 */
export const routerList = [
    {
        name: 'hellow',
        path: '/',
        routerName: '我的世界',
        component: () => import('../components/HelloWorld')
    },
    {
        name: 'useRef',
        path: '/useRef',
        routerName: 'useRef',
        component: () => import('../components/useRef')
    }
]