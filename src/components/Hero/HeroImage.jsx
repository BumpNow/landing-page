import heroImage from '../../assets/images/bump-logo.png';

const HeroImage = () => (
  <div
    className="flex justify-center row mt-14"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="w-8/12 lg:w-5/6">
      <img src={heroImage} alt="hero" />
    </div>
  </div>
);

export default HeroImage;
