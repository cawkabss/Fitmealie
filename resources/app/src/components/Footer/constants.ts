import FacebookIcon from 'assets/icons/facebook.svg';
import InstagramIcon from 'assets/icons/instagram.svg';

import { SUPPORT_EMAIL } from 'constants/common';

export const COMPANY_SECTION = {
  title: 'Company',
  links: [
    // {
    //   title: 'About us',
    //   url: '/about',
    // },
    {
      title: 'Contact us',
      url: '/contact',
    },
    // {
    //   title: 'Reviews',
    //   url: '/reviews',
    // },
  ],
};

export const TERMS_SECTION = {
  title: 'Terms & policies',
  links: [
    {
      title: 'Terms of use',
      url: '/terms-of-use',
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
    },
    // {
    //   title: 'Cookie Policy',
    //   url: '/cooki-policy',
    // },
    {
      title: 'Refund Policy',
      url: '/refund-policy',
    },
  ],
};

export const RESOURCES_SECTION = {
  title: 'Useful Resources',
  links: [
    {
      title: 'Blog',
      url: '/blog',
    },
  ],
};

export const SOCIALS_SECTION = {
  title: 'Keep in touch',
  links: [
    {
      icon: FacebookIcon,
      url: 'https://www.facebook.com/fitmealie',
    },
    {
      icon: InstagramIcon,
      url: 'https://www.instagram.com/fit_mealie',
    },
  ],
};

export const CONTACTS_SECTION = {
  links: [
    {
      title: 'Fitmealie',
    },
    {
      title: '871 Coronado Center Drive, Suite 200, Office 222A, Henderson, Nevada 89052',
    },
    {
      title: '+1 (702) 602-8855',
    },
    {
      title: SUPPORT_EMAIL,
    },
  ],
};
