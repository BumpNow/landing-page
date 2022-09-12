import { Link } from 'react-router-dom';
import {
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
} from '../Icons/SocialMediaIcons';

export const FooterLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">
      The Squad
    </Link>
    <Link to="/contact" className="link link-hover">
      Hit us up
    </Link>
    <Link to="/faq" className="link link-hover">
      FAQs
    </Link>
    <Link to="/support" className="link link-hover">
      Support!
    </Link>
  </div>
);

export const FooterSocialLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <a href="https://www.youtube.com/watch?v=4IahvCIqeOc">
      <TwitterIcon />
    </a>
    <a href="https://www.youtube.com/watch?v=4IahvCIqeOc" className="ml-1">
      <YoutubeIcon />
    </a>
    <a href="https://www.youtube.com/watch?v=4IahvCIqeOc">
      <FacebookIcon />
    </a>
  </div>
);
