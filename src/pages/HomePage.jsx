import Hero from '../components/sections/Hero';
import FeatureCards from '../components/sections/FeatureCards';
import BrandStatement from '../components/sections/BrandStatement';
import MenuPreview from '../components/sections/MenuPreview';
import StoryPreview from '../components/sections/StoryPreview';
import ReservationCTA from '../components/sections/ReservationCTA';
import Testimonials from '../components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <BrandStatement />
      <MenuPreview />
      <StoryPreview />
      <ReservationCTA />
      <Testimonials />
    </>
  );
}
