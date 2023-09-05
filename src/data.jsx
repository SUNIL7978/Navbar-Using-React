import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/project',
    text: 'Project',
  },
  {
    id: 4,
    url: '/contact',
    text: 'Contacts',
  },
  {
    id: 5,
    url: '/profile',
    text: 'Profile',
  },
];

export const social = [
  {
    id: 1,
    href: 'https://twitter.com/',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    href: 'https://www.facebook.com/',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    href: 'https://in.linkedin.com/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    href: 'https://www.youtube.com/',
    icon: <FaYoutube />,
  },
];
