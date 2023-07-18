import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import CarouselSlide from './CarouselSlide';

type Props = {
  slides: any[];
  slidesToShow: number;
};

const Carousel = ({ slides, slidesToShow = 3 }: Props) => {
  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className='absolute bottom-0 right-12 z-50 overflow-hidden'
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button className='absolute bottom-0 right-0 z-50 pr-5' onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    // @ts-ignore
    prevArrow: <CustomPrevArrow onClick={CustomPrevArrow} />, // Pass onClick function
    // @ts-ignore
    nextArrow: <CustomNextArrow onClick={CustomNextArrow} />, // Pass onClick function
  };

  return (
    <Slider {...settings} className='overflow-hidden'>
      {slides.map((slide: any) => (
        <CarouselSlide
          title={slide.title}
          location={slide.location}
          img={slide.img || 'https://via.placeholder.com/500'}
          key={slide.id}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
