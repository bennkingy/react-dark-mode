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
        title='Mallard Plumbing and Heating'
        subtitle='From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.'
        cta={{
          label: 'Get a quote',
          onClick: () => {
            removeBodyScrollingWhenModalOpen(true);
            registerModal.onOpen();
          },
        }}
      />
      <Intro />
      <Services />
    </div>
  );
};

export default Home;
