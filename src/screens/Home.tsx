import Carousel from '../components/Carousel';
import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Services from '../components/Services';
// import Waves from '../components/Waves';
import { removeBodyScrollingWhenModalOpen } from '../helpers/extensions';
import useRentModal from '../hooks/useRentModal';

const slides = [
  {
    title: 'Kitchen Renovation',
    location: 'London',
    img: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Bathroom Renovation',
    location: 'Scotland',
    img: 'https://images.unsplash.com/photo-1603825491103-bd638b1873b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: null,
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: null,
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: null,
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: null,
  },
  {
    title: 'Bathroom Renovation',
    location: 'Surrey',
    img: null,
  },
];

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
      <div className='mx-auto max-w-screen-xl overflow-visible'>
        <Heading
          title='Gallery'
          tag='Our work gallery'
          center
          className='mt-20 mb-11'
        />
        <Carousel slides={slides} slidesToShow={3} />
      </div>
      <Heading title='Services' tag='Our services' center className='mt-10' />
      <Services />
      {/* <MainServices /> */}
    </div>
  );
};

export default Home;
