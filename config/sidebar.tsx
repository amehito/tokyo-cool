import {  Rocket, Search, Wrench } from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Gogogo 出发',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: '入境',
        href: '/docs/guides/immigration-guide',
      },
      {
        title: '基础日语',
        href: '/docs/guides/basic-jp',
      },
      {
        title: '小心被骗',
        href: '/docs/getting-started/quick-start',
      },
    ],
  },

  {
    title: '工作',
    icon: <Wrench className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: '工作',
        href: '/docs/job/job',
      }
    ],
  },

  {
    title: '攻略',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/search-bar',
    pages: [],
  },
  {
    title: '提意见',
    icon: <Search className="h-5 w-5" />,
    defaultOpen: true,
    href: '/docs/search-bar',
    pages: [],
  },
  
];
