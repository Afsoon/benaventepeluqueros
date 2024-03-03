import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Widgets',
      href: '#',
    },
  ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/benaventepeluqueros' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/BenaventePeluqueros' },
    { ariaLabel: 'Google Maps', icon: 'tabler:brand-google-maps', href: 'https://goo.gl/maps/ecwYBJDidJoS4FBD9' },
  ],
  schedule: [
    {days: "Martes - Viernes", hours: "10:00 - 19:00"},
    {days: "Sabado", hours: "10:00 - 14:00"}
  ]
};
