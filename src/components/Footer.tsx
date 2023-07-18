import Map from './Map';
import SMSForm from './SMSForm';
// import ToggleTheme from './ToggleTheme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from './Services';

library.add(faInstagram, faFacebook);

const Footer = ({ children }: any) => (
  <footer className=''>
    <div className='md:px-5 sm:px-2 p-4 md:py-8 max-w-screen-xl mx-auto -mb-[100px]'>
      <Map />
    </div>
    <div className='mx-auto w-full bg-gray-900 dark:bg-gray-900 pt-[100px]'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <a href='/' className='flex items-center'>
              <span
                className={`self-center text-2xl font-semibold whitespace-nowrap 
                text-white
              `}
              >
                Plumbers
              </span>
            </a>
            <div className='mt-6'>
              <FontAwesomeIcon
                icon={faFacebook}
                className='text-white text-3xl mr-4'
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-white text-3xl'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Services
            </h2>
            <div className='flex flex-row'>
              <ul className='text-gray-500 dark:text-gray-400 font-medium mr-7'>
                {categories.slice(0, 3).map((category) => {
                  return (
                    <li>
                      <a href={category.url} className='hover:underline'>
                        {category.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className='text-gray-500 dark:text-gray-400 font-medium  mr-7'>
                {categories.slice(3, 6).map((category) => {
                  return (
                    <li>
                      <a href={category.url} className='hover:underline'>
                        {category.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {categories.slice(6, 9).map((category) => {
                  return (
                    <li>
                      <a href={category.url} className='hover:underline'>
                        {category.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Request a call back
            </h2>
            <SMSForm />
          </div>
        </div>
      </div>
      <div className='px-4 pb-6 dark:bg-gray-700 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto'>
        <ul className='text-gray-500 dark:text-gray-400 font-medium flex flex-row text-sm'>
          <li className='mr-4'>
            <a href='#' className='hover:underline'>
              Privacy Policy
            </a>
          </li>
          <li className='mr-4'>
            <a href='#' className='hover:underline'>
              Licensing
            </a>
          </li>
          <li className='mr-4'>
            <a href='#' className='hover:underline'>
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
        <div className='flex mt-6 space-x-5 sm:justify-center md:mt-0'>
          <span className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'>
            © 2023 <a href='https://flowbite.com/'>MallrdPLumbing™</a>. All
            Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
