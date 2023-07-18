type props = {
  title: string;
  location: string;
  img: string;
};

const CarouselSlide = ({ title, location, img }: props) => {
  return (
    <div className='-mb-10'>
      <div className='relative rounded-lg overflow-hidden before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-black before:opacity-30'>
        <img
          className='w-full rounded-lg h-[500px] relative object-cover'
          src={img}
          alt='office content 1'
        />
      </div>
      <h3 className='relative bottom-20 left-10 text-2xl text-white z-50'>
        {title || 'Bathroom Renovation'}
      </h3>
      <p className='relative bottom-20 left-10 text-xl text-white z-50 mb-0 pb-0'>
        {location || 'Surrey'}
      </p>
    </div>
  );
};

export default CarouselSlide;
