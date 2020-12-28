/* eslint-disable prettier/prettier */
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as VscIcons from 'react-icons/vsc';
import React from 'react';

export const SidebarData = [
    {
        title: 'Hy!',
        path: '/',
        icon: <BiIcons.BiUserCircle />,
        cName: 'nav-user nav-text',
    },
    {
        title: 'CATEGORIES',
        path: '/',
        icon: <VscIcons.VscGroupByRefType />,
        cName: 'nav-text',
    },
    {
        title: 'Accessories',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Shirts',
        path: '/',
        icon: <RiIcons.RiShirtFill />,
        cName: 'nav-text',
    },
    {
        title: 'Pants',
        path: '/',
        icon: <GiIcons.GiArmoredPants />,
        cName: 'nav-text',
    },
    {
        title: 'Jackets',
        path: '/',
        icon: <GiIcons.GiSleevelessJacket />,
        cName: 'nav-text',
    },
    {
        title: 'Past Orders',
        path: '/',
        icon: <VscIcons.VscHistory />,
        cName: 'nav-text',
    },
    {
        title: 'Add Address',
        path: '/',
        icon: <FaIcons.FaAddressBook />,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/',
        icon: <RiIcons.RiLogoutCircleFill color="red" />,
        cName: 'nav-text',
    },
];
