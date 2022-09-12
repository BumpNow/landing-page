import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroLinks from './HeroLinks';
import HeroImage from './HeroImage';

const HeroMain = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-36 text-center md:pb-16">
    <HeroTitle
      text={
        <>
          Digitizing{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Serendipity
          </span>
          
        </>
      }
    />
    <div className="max-w-3xl mx-auto">
      <HeroDescription text="Bump is a social experience designed to help you connect with people by chance on the way to an event, or on your daily commute to work. Conversations start from wherever you are at the time." />
      <HeroLinks />
    </div>
    <HeroImage />
  </div>
);

export default HeroMain;
