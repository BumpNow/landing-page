import { Link } from 'react-router-dom';

const NavLinks = ({ showLogin }) => (
  <>
    <li>
      <a href="https://www.getwaitlist.com/waitlist/4129">Join Waitlist!</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=4IahvCIqeOc">Start Bumping</a>
    </li>
    <li className="lg:px-2" onClick={showLogin}>
      <a>Secret...</a>
    </li>
  </>
);

export default NavLinks;