import { lazy } from "react"
import Profile from "../views/profile"
import { MessageFilled } from "@ant-design/icons"
import {MoreIcon,ProfileIcon,LockersIcon ,ProposalsIcon,TreasuryIcon} from "../layout/icons"

const routes = [
    {
        path: '/profile',
        name: '/',
        til: 'Profile',
        element: Profile,
        hidden: false,
        icon: <ProfileIcon />,
    },
    {
        path: '/proposals',
        name: '/proposals',
        til: 'Proposals',
        element: lazy(() => import('../views/proposals')),
        hidden: false,
        icon: <ProposalsIcon />,
    },
    {
        path: '/lockers',
        name: '/lockers',
        til: 'Lockers',
        element: lazy(() => import('../views/lockers')),
        hidden: false,
        icon: <LockersIcon />,
    },
    {
        path: '/treasury',
        name: '/treasury',
        til: 'Treasury',
        element: lazy(() => import('../views/treasury')),
        hidden: false,
        icon: <TreasuryIcon />,
    },
    {
        path: '/more',
        name: '/more',
        til: 'More',
        element: lazy(() => import('../views/more')),
        hidden: false,
        icon: <MoreIcon />,
    },
    {
        path: '*',
        name: '404',
        element: lazy(() => import('../views/404')),
        hidden: true,
        icon: <MessageFilled />,
    },
    {
        path: '/locker_details',
        name: 'locker_details',
        element: lazy(() => import('../views/locker_details')),
        hidden: true,
        icon: <MessageFilled />,
    },
    {
        path: '/privacy_policy',
        name: 'privacy_policy',
        element: lazy(() => import('../views/privacy_policy')),
        hidden: true,
        icon: <MessageFilled />,
    },
    {
        path: '/terms_of_service',
        name: 'terms_of_service',
        element: lazy(() => import('../views/terms_of_service')),
        hidden: true,
        icon: <MessageFilled />,
    },
    {
        path: '/login',
        name: 'login',
        element: lazy(() => import('../views/login')),
        hidden: true,
        icon: <MoreIcon />,
    },
]


export default routes