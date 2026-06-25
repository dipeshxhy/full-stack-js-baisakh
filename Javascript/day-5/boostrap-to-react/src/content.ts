import {
  aboutImage,
  bannerImage,
  blogImage,
  blogImageOne,
  blogImageTwo,
  callIcon,
  contactImage,
  customerImage,
  iconFour,
  iconOne,
  iconThree,
  iconTwo,
  imageOne,
  imageThree,
  imageTwo,
  mailIcon,
  playIcon,
  prefixImage,
  quickIcon,
} from './assets/media';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Shop', path: '/shop' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const heroBadges = [
  { label: 'Fast posting', value: '1-click publish' },
  { label: 'Verified sellers', value: 'Trusted marketplace' },
  { label: 'Smart search', value: 'Filter by category' },
];

export const serviceCards = [
  {
    title: 'Automotive',
    image: iconOne,
    description: 'List cars, bikes, and parts with a strong visual story.',
  },
  {
    title: 'Fashion',
    image: iconTwo,
    description: 'Showcase apparel and accessories with clear cards.',
  },
  {
    title: 'Electronics',
    image: iconThree,
    description: 'Present gadgets with clean layout and intent.',
  },
  { title: 'Jobs', image: iconFour, description: 'Highlight hiring opportunities and services.' },
];

export const adCards = [
  { title: 'Best Bike Sell', price: '$3000', image: blogImage },
  { title: 'Laptop sell', price: '$3000', image: blogImageOne },
  { title: 'Best Camera Sell', price: '$3000', image: blogImageTwo },
];

export const pricingPlans = [
  {
    name: 'Regular',
    price: 30,
    note: "using 'Content here, content here', making it look like readable",
  },
  {
    name: 'Standard',
    price: 30,
    note: "using 'Content here, content here', making it look like readable",
    featured: true,
  },
  {
    name: 'Premium',
    price: 30,
    note: "using 'Content here, content here', making it look like readable",
  },
];

export const testimonials = [
  {
    quote:
      "Has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: 'Content',
    role: 'And web page',
    image: customerImage,
  },
  {
    quote:
      'The React structure keeps the same template feel while making the code easier to extend.',
    name: 'Marketplace team',
    role: 'Product owners',
    image: customerImage,
  },
];

export const shopProducts = [
  { title: 'Creative workspace', category: 'Office', image: imageOne },
  { title: 'Modern corridor', category: 'Interior', image: imageTwo },
  { title: 'Bright studio', category: 'Interior', image: imageThree },
];

export const aboutHighlights = [
  'Reusable React sections instead of static HTML',
  'Shared assets and content modules',
  'Responsive layout with simpler maintenance',
];

export const footerColumns = [
  {
    title: 'Useful links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'Liodeno', href: '#' },
      { label: 'Jokri', href: '#' },
      { label: 'Begana', href: '#' },
      { label: 'Products', href: '#' },
    ],
  },
];

export const contactCards = [
  { title: 'Call us', value: '+01 1234567', image: callIcon },
  { title: 'Email us', value: 'demo@gmail.com', image: mailIcon },
  { title: 'Quick support', value: 'Always online', image: quickIcon },
];

export const homeMedia = {
  bannerImage,
  aboutImage,
  contactImage,
  playIcon,
  prefixImage,
};
