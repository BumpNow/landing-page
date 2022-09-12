import heroImage from '../../assets/images/bump-logo.png';

const HeroImage = () => (
  <div
    className="flex justify-center row mt-14"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="w-full lg:w-5/6 content-center">
      <img src={heroImage} alt="hero" />
    </div>
  </div>
);

export default HeroImage;
