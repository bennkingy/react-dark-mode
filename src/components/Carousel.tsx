import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import CarouselSlide from './CarouselSlide';

type Props = {
  slides: any[];
  slidesToShow: number;
};

const Carousel = ({ slides, slidesToShow = 3 }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className={`absolute bottom-0 right-12 z-50 overflow-hidden ${
        currentSlide === 0 ? 'opacity-0' : ''
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className={`absolute bottom-0 right-0 z-50 pr-5 ${
        currentSlide === slides.length - slidesToShow ? 'opacity-0' : ''
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    afterChange: (current: number) => setCurrentSlide(current),
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
