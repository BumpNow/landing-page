import FeatureCard from './FeatureCard';
import {
  FeatureOneIcon,
  FeatureTwoIcon,
  FeatureThreeIcon,
} from '../Icons/FeatureIcons';

const Features = () => (
  <div className="py-3">
    <div className="px-8 mx-auto max-w-6xl py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <div
        data-aos="fade-out"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureOneIcon}
          title="So Easy"
          content="Hop on Bump, create a profile, see when and where events are, who's attending and more!"
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="600"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureTwoIcon}
          title="Personal Secretary"
          content="With so many events, bump will be there. Notifications, event recommendations, everything. A personal secretary! (With a good taste)"
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="800"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureThreeIcon}
          title="Touch Grass"
          content="Is this another social media app? Nah. We power in-person IRL events through software. That's where true magic happens. Let's combine the traditions of past and present."
        />
      </div>
    </div>
  </div>
);

export default Features;
