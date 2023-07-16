import Slider from 'react-slick';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slide: '.slick-slideshow__slide',
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: '20%',
  };

  return (
    <Slider {...settings} className='overflow-hidden ml-20 max-h-sm'>
      <div className='slick-slideshow__slideh-20 pl-5'>
        <img
          className='w-full rounded-lg max-h-[200px]'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
          alt='office content 1'
        />
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className='slick-slideshow__slideh-20 pl-5'>
        <img
          className='w-full rounded-lg max-h-[200px]'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
          alt='office content 1'
        />
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className='slick-slideshow__slideh-20 pl-5'>
        <img
          className='w-full rounded-lg max-h-[200px]'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
          alt='office content 1'
        />
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className='slick-slideshow__slideh-20 pl-5'>
        <img
          className='w-full rounded-lg max-h-[200px]'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
          alt='office content 1'
        />
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </Slider>
  );
};

export default Carousel;
