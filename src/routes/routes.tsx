import { Path } from 'react-router-dom';
import { ElementType, Fragment, ReactNode } from 'react';

import ItemProvider from '../Context/ItemProvider';

import Form from '../pages/Form';
import Dashboard from '../pages/Dashboard';
import Item from '../pages/Item';
import MainLayout from '../layouts';

interface Route {
    path: string;
    component: ElementType;
    layout: ElementType;
}

const ItemComp = () => {
    return (
        <ItemProvider>
            <Item />
        </ItemProvider>
    );
};

const publicRoutes: Route[] = [
    { path: '/', component: ItemComp, layout: MainLayout },
    { path: '/adm/', component: Dashboard, layout: MainLayout },
    { path: '/adm/form', component: Form, layout: Fragment },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
