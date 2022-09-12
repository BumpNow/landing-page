import heroImage from '../../assets/images/bump-logo.png';

const HeroImage = () => (
  <div
    className="flex justify-center row mt-14"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="px-300 content-center">
      <img className="content-center" src={heroImage} alt="hero" />
    </div>
  </div>
);

export default HeroImage;
