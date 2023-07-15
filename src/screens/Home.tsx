import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import { removeBodyScrollingWhenModalOpen } from '../helpers/extensions';
import useRegisterModal from '../hooks/useRegisterModal';

const Home: React.FC = () => {
  const registerModal = useRegisterModal();

  return (
    <div className=''>
      <Hero
        height='h-[70vh]'
        title='Welcome to Mallard Plumbing and Heating'
        subtitle='With over 10 years industry experience, we pride ourselves on providing an efficient, transparent, and reliable service. With customer satisfaction at the forefront of what we do, we strive to provide the highest quality workmanship and convenient solutions to our valued customer base.'
        cta={{
          label: 'Get a quote',
          onClick: () => {
            removeBodyScrollingWhenModalOpen(true);
            registerModal.onOpen();
          },
        }}
      />
      <Carousel />
      <Intro />
      <Services />
    </div>
  );
};

export default Home;
