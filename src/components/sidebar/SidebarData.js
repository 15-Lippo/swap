import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaIcons.FaWallet color="black" />,
    cName: 'nav-text',
  },
  {
    title: 'Swap',
    path: '/swap',
    icon: <FaIcons.FaEthereum color="black" />,
    cName: 'nav-text'
  },
  {
    title: 'Withdraw',
    path: '/withdraw',
    icon: <AiIcons.AiOutlineSend color="black" />,
    cName: 'nav-text'
  },
  {
    title: 'Stream',
    path: '/stream',
    icon: <FaIcons.FaCartPlus color="black" />,
    cName: 'nav-text'
  },
  {
    title: 'Distribute',
    path: '/distribute',
    icon: <IoIcons.IoMdPeople color="black" />,
    cName: 'nav-text'
  },
];