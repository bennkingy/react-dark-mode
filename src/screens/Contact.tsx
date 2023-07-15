import React from 'react';
import Hero from '../components/Hero';

const Contact: React.FC = () => {
  return (
    <div className=''>
      <Hero
        height='h-96'
        title='Contact'
        subtitle='Just ask, I am happy to help!'
        cta={{
          label: 'Get a quote',
          onClick: () => console.log(),
        }}
        cta2={{
          label: 'Get a quote',
          onClick: () => console.log(),
        }}
      />
    </div>
  );
};

export default Contact;
