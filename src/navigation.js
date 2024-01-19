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
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>.
  `,
};
