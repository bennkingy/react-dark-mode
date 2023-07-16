import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const categories = [
  {
    label: 'Gas Safety Certificates',
    description:
      'Landlord gas safety certificates It is a legal requirement for all landlords to ensure they have an up-to-date Gas Safety Certificate or CP12 for each gas appliance within the property, which must be renewed every year, failure to do so may result in substantial fines, and render the appliances unsafe for the tenants to use.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'fire-flame-simple' })} />,
  },
  {
    label: 'Plumbing and Heating',
    description: 'Something about Plumbing and Heating.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} />,
  },
  {
    label: 'Annual Boiler Servicing',
    description:
      'If you stay on top of your annual boiler servicing, PowerFlushing is usually recommended every 5 years. All other plumbing services We cover the full spectrum of plumbing, gas and heating work, with no job being too small or big for us to handle. Whether it be a simple tap cartridge change, boiler installation, or an emergency plumbing issue, we have the knowledge and expertise to get this fixed for you, in a timely and affordable manner.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'wrench' })} />,
  },
  {
    label: 'Free Health check',
    description: 'Something about a health check.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'heart' })} />,
  },
  {
    label: 'Servicing or Repairing',
    description: 'Something about a servicing or repairing.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'user' })} />,
  },
  {
    label: 'Emergency repairs',
    description: 'Something about emergency repairs.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} />,
  },
  {
    label: 'System Installation',
    description: 'Something about system instalaltions.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'warning' })} />,
  },
  {
    label: 'Power Flushing',
    description:
      'Fortunately Mallard Plumbing and Heating services are well equipped to provide these for you on an ad-hoc or annual basis to suit your requirements. Power flushing Is your heating system showing signs of bad circulation? Over time a combination of sludge, rust and debris can accumulate in your central heating system. Power flushing helps by improvising the circulation of water throughout the pipework, enabling your system to operate optimally, extending the life of your heating system and reducing the risk of breakdowns.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'toilet' })} />,
  },
  {
    label: 'Something else',
    description: 'This is super edge case bro.',
    url: '/',
    icon: <FontAwesomeIcon icon={icon({ name: 'question' })} />,
  },
];

const Services = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Some of the services we provide
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
                  {category.icon}
                </div>
                <h3 className='mb-2 text-xl font-bold dark:text-white'>
                  {category.label}
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
