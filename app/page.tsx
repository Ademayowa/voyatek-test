import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import styles, { layout } from '../styles';
import Stats from '@/components/Stats';
import Business from '@/components/Business';
import Billing from '@/components/Billing';
import Clients from '@/components/Clients';
import CardDeal from '@/components/CardDeal';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className='bg-[#00040f] w-full overflow-hidden'>
      <Navbar />
      <Hero />

      <div className='bg-[#00040f] sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
}
