import Map from './Map';
import SMSForm from './SMSForm';
import ToggleTheme from './ToggleTheme';

const Footer = ({ children }: any) => (
  <footer className='bg-white shadow dark:bg-gray-900 lg pt-16'>
    <div className='md:px-5 sm:px-2 p-4 md:py-8 max-w-screen-xl mx-auto'>
      <Map />
    </div>
    <div className='md:px-5 sm:px-2 p-4 md:py-8 max-w-screen-xl mx-auto'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a
          href='https://flowbite.com/'
          className='flex items-center mb-4 sm:mb-0'
        >
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Plumbers
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2023{' '}
        <a href='https://flowbite.com/' className='hover:underline'>
          Plumbers
        </a>
        . All Rights Reserved.
      </span>
      <span className='m-auto'>
        <ToggleTheme />
        <SMSForm />
      </span>
    </div>
    {children}
  </footer>
);

export default Footer;
