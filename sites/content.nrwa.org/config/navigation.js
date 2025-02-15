const topics = {
  primary: [
    { href: '/utility-operations', label: 'Utility Operations' },
    { href: '/legislation', label: 'Legislation' },
    { href: '/technology', label: 'Technology' },
  ],
  expanded: [],
  secondary: [],
};

const resources = [
  { href: '/magazine', label: 'Magazine' },
  { href: '/videos', label: 'Videos' },
  { href: '/resource-guide', label: 'Resource Guide' },
  { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
  // { href: '/white-papers', label: 'White Papers' },
];

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
];

const mobileMenu = {
  primary: topics.primary,
  secondary: [
    ...resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
  resources: [...resources],
};

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...topics.primary,
      { href: '/resource-guide', label: 'Resource Guide' },
      { href: 'https://careers.nrwa.org', label: 'Career Center', target: '_blank' },
      { href: 'https://waterproconference.org', label: 'WaterPro Conference', target: '_blank' },
    ],
  },
  tertiary: {
    items: [],
  },
  desktopMenu,
  mobileMenu,
  footer: {
    topics: topics.primary,
    toolbox: [
      { href: '/resource-guide', label: 'Resource Guide' },
      { href: 'https://www.ruralwatermag.com/ruralwater/third_quarter_2021_vol__42_no_3/MobilePagedArticle.action?articleId=1721459#articleId1721459', label: 'Rural Water Magazine', target: '_blank' },
      { href: 'https://theassociationpartner.com/nrwa/', label: 'Digital Retargeting Opportunities', target: '_blank' },
      { href: 'http://nrwa.org/non-discrimination-policy/', label: 'Non-Discrimination Policy', target: '_blank' },
      { href: 'https://members.nrwa.org/Public/Members/NRWA-Store/iCore/Store/StoreLayouts/Store_Home.aspx', label: 'NRWA Online Store', target: '_blank' },
      { href: 'http://nrwa.org/wp-content/uploads/2021/02/2021-NRWA-MediaKit-FINAL-1.pdf', label: 'Media Kit', target: '_blank' },
      { href: '/page/contact-us', label: 'Contact Us' },
    ],
    subscribe: [
      { href: '/', label: 'Sign up to receive weekly updates from NRWA', target: '_blank' },
      { href: '/', label: 'Sign up for Rural Water Magazine', target: '_blank' },
    ],
    items: [
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
