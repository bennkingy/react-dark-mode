import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const categories = [
  {
    label: 'Gas Safety Certificates',
    description:
      'Ensuring the safety of your tenants is a top priority for landlords. By law, you must have an up-to-date Gas Safety Certificate or CP12 for every gas appliance in your property. These certificates need to be renewed annually to comply with regulations. Failure to do so can result in significant fines and, more importantly, put your tenants at risk. Rest assured, our professional team can help you obtain and maintain these certificates, ensuring the safety of your property and its occupants.',
    url: '/',
    icon: (
      <FontAwesomeIcon
        icon={icon({ name: 'fire-flame-simple' })}
        color='white'
      />
    ),
  },
  {
    label: 'Plumbing and Heating',
    description:
      'At our plumbing and heating company, we offer comprehensive services to meet all your plumbing and heating needs. No job is too small or too big for us. From a simple tap cartridge change to a complete boiler installation, we have the knowledge and expertise to handle it all. Our skilled team is dedicated to delivering timely and affordable solutions, providing you with peace of mind and efficient plumbing and heating systems.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} color='white' />,
  },
  {
    label: 'Free Health check',
    description:
      "Taking care of your plumbing and heating system's health is crucial to prevent unexpected problems. We offer complimentary health checks to assess the condition of your system, identifying any potential issues and offering suitable recommendations. Our team of experts will conduct a thorough inspection, ensuring that your system is functioning optimally and providing you with the peace of mind you deserve.",
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'heart' })} color='white' />,
  },
  {
    label: 'Servicing or Repairing',
    description:
      "Whether your plumbing or heating system needs servicing or repair, our dedicated team is here to assist you. We have the skills and knowledge to handle a wide range of plumbing and heating issues. Our technicians will promptly diagnose the problem and provide effective solutions to restore your system's functionality. Trust us to deliver reliable and efficient servicing or repairs, keeping your plumbing and heating systems in excellent condition.",
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'user' })} color='white' />,
  },
  {
    label: 'Emergency repairs',
    description:
      'Plumbing and heating emergencies can happen at any time, causing inconvenience and stress. Our team is available round-the-clock to provide emergency repairs when you need them most. We understand the urgency of such situations and will swiftly respond to your call, offering reliable and efficient solutions to resolve the issue. Rest assured, our experienced technicians will restore your plumbing and heating systems to full operation promptly.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} />,
  },
  {
    label: 'System Installation',
    description:
      "When it comes to system installations, our professional team has the expertise to handle the job with precision and efficiency. Whether you need a new boiler, central heating system, or any other plumbing and heating component installed, we've got you covered. We work diligently to ensure proper installation, taking into account your specific requirements and providing you with a reliable and efficient system that meets your needs.",
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} />,
  },
  {
    label: 'Power Flushing',
    description:
      'Is your heating system exhibiting signs of poor circulation? Over time, sludge, rust, and debris can accumulate in your central heating system, hindering its performance. Power flushing is an effective solution to improve water circulation, enhancing the efficiency and lifespan of your heating system while reducing the risk of breakdowns. Our skilled technicians are well-equipped to provide power flushing services, whether on an ad-hoc or annual basis, tailored to your specific requirements.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'toilet' })} />,
    main: true,
  },
  {
    label: 'Boiler Servicing',
    description:
      "Regular maintenance is key to ensuring the longevity and efficiency of your boiler. We highly recommend staying on top of your annual boiler servicing. Additionally, Power Flushing is an essential service that should be performed every five years. Over time, sludge, rust, and debris can accumulate in your central heating system, causing circulation issues. Power flushing helps improve water circulation, optimizing your system's performance, extending its lifespan, and reducing the risk of breakdowns.",
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'wrench' })} />,
    main: false,
  },
  {
    label: 'Something else',
    description:
      "We're always ready to tackle unique challenges and cater to your specific plumbing and heating needs. Our experienced team is versatile and knowledgeable, capable of handling even the most unusual cases. Feel free to reach out to us with your requirements, and we'll provide you with tailored solutions that meet your expectations. Your satisfaction is our priority, and we strive to deliver outstanding service, no matter the complexity of the task.",
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'question' })} />,
  },
];

const Services = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        {/* <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Some of the services we provide
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div> */}
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:space-0 drop-shadow-2xl -ml-[2px]'>
          {categories.slice(0, 6).map((category, i) => {
            return (
              <div
                key={i}
                className='hover:bg-blue-500 border-2 p-10 -mr-2 -mt-2 text-gray-500 bg-white hover:text-white'
              >
                <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-blue-900'>
                  {category.icon}
                </div>
                <h3 className='mb-2 text-xl font-bold text-black hover:text-black'>
                  {category.label}
                </h3>
                <p className=' hover:text-white'>{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
