import Hero from '../components/Hero';
import Services from '../components/Services';
import Waves from '../components/Waves';
import { removeBodyScrollingWhenModalOpen } from '../helpers/extensions';
import useRentModal from '../hooks/useRentModal';

const Home: React.FC = () => {
  const rentModal = useRentModal();

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
            rentModal.onOpen();
          },
        }}
      />
      <Waves />
      <Services />
    </div>
  );
};

export default Home;
