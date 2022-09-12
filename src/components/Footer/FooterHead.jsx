import Logo from '../Icons/Logo';

const FooterHead = () => (
  <div>
    <Logo />
    <p className="font-bold">Bump</p>
    <p className="">
      Made by{' '}
      <a
        className="link link-hover"
        href="https://discord.gg/XrFFG75Y2t"
        target="_blank"
      >
        Bump
      </a>{' '}
      - All Gen-Z rights reserved
    </p>
  </div>
);

export default FooterHead;
