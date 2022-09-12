import { Link } from 'react-router-dom';

const HeroLinks = () => (
  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
    <div data-aos="fade-right" data-aos-delay="300">
      <a
        className="btn btn-primary w-full mb-4 sm:w-auto sm:mb-0"
        href="https://www.getwaitlist.com/waitlist/4129"
        target="_blank"
      >
        Bump Waitlist
      </a>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <a
        className="btn w-full sm:w-auto sm:ml-4"
        href="https://discord.gg/XrFFG75Y2t"
        target="_blank"
      >
        Bump Discord
      </a>
    </div>
  </div>
);

export default HeroLinks;
