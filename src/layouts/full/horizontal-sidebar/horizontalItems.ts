import { CircleIcon, PointIcon } from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  subCaption?: string;
  class?: string;
  extraclass?: string;
  type?: string;
}

const horizontalItems: menu[] = [
  {
    title: 'Dashboard',
    icon: 'solar:home-2-linear',
    to: '/'
  },

  {
    title: 'Clients',
    icon: 'solar:user-linear',
    to: '/clients'
  },

  {
    title: 'Store',
    icon: 'solar:shop-linear',
    to: '/store'
  },
  {
    title: 'Services',
    icon: 'solar:chart-square-line-duotone',
    to: '/services'
  },
  {
    title: 'Booking',
    icon: 'solar:notes-linear',
    to: '/booking'
  },
  {
    title: 'Reviews',
    icon: 'solar:star-outline',
    to: '/reviews'
  },
  {
    title: 'Offers',
    icon: 'solar:ticket-broken',
    to: '/offers'
  },

  {
    title: "Educational Video",
    icon: "solar:video-frame-play-horizontal-broken",
    to: "/educational-video",
  },

  {
    title: 'Settlements',
    icon: 'solar:clipboard-text-outline',
    to: '/settlements',
    // children: [
    //   {
    //     title: 'Settlement1',
    //     to: '/settlements/settlement1'
    //   },
    //   {
    //     title: 'Settlement2',
    //     to: '/settlements/settlement2'
    //   },
    //   {
    //     title: 'Settlement3',
    //     to: '/settlements/settlement3'
    //   }
    // ]
  },

  {
    title: "Bank Setting",
    icon: "ri:bank-line",
    to: "/bank-setting",
  },

  // {
  //   title: 'Permissions',
  //   icon: 'solar:shield-keyhole-minimalistic-outline',
  //   to: '#',
  //   children: [
  //     {
  //       title: 'Permissions1',
  //       to: '/permissions/permissions1'
  //     },
  //     {
  //       title: 'Permissions2',
  //       to: '/permissions/permissions2'
  //     }
  //   ]
  // },

  {
    title: 'ReportsStatistics',
    icon: 'solar:checklist-minimalistic-linear',
    to: '/reports-statistics'
  },
  {
    title: 'ConnectServices',
    icon: 'solar:folder-path-connect-outline',
    to: '/connect-services'
  },
  {
    title: 'SubscriptionPackage',
    icon: 'solar:chat-round-video-outline',
    to: '/subscription-package'
  }
];

export default horizontalItems;
