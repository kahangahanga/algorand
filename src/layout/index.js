import React, { useState, Suspense, useEffect } from 'react';
import { Layout, Menu, } from 'antd';
import routes from '../router';
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import "./layout.scss"
import { LogoIcon, BottomIcon ,ZuoShangIcon,YouShangIcon} from './icons';

const { Content } = Layout;
function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}
const Layouts = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const items = routes.filter((item) => !item.hidden).map((item) => {
        return getItem(item.til, item.path, item.icon)
    })
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key)
    };
    useEffect(() => {
        if (location.pathname === "/") {
            navigate("/profile")
        }
    }, [location.pathname, navigate])

    console.log(location.pathname)

    return (
        <Layout className="layout">
            <header>
                <Menu
                    onClick={onClick}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname === "/" ? "/profile" : location.pathname ]}
                    items={items} />
                <div className='logo'>
                    <i><LogoIcon /></i>
                    <i><BottomIcon /></i>
                </div>
                <div className='left'>
                    <ZuoShangIcon />
                    <ZuoShangIcon />
                    <ZuoShangIcon />
                </div>
                <div className='right'>
                    <YouShangIcon />
                    <YouShangIcon />
                    <YouShangIcon />
                </div>
            </header>
            <Content>
                <div className="site-layout-content">
                    <Suspense fallback={<div className="lazy"><img src="" alt='' /></div>}>
                        <Routes>
                            {
                                routes.map(item => (
                                    <Route key={item.name} path={item.path} element={<item.element navigate={navigate} />}></Route>
                                ))
                            }
                        </Routes>
                    </Suspense>
                </div>
            </Content>
        </Layout>
    );
};
export default Layouts;