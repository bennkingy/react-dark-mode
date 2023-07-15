import Map from './Map';
import SMSForm from './SMSForm';

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
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Help center
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Discord Server
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Twitter
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Legal
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Licensing
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Request a call back
            </h2>
            <SMSForm />
          </div>
        </div>
      </div>
      <div className='px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto'>
        <span className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'>
          © 2023 <a href='https://flowbite.com/'>Flowbite™</a>. All Rights
          Reserved.
        </span>
        <div className='flex mt-4 space-x-5 sm:justify-center md:mt-0'>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 8 19'
            >
              <path
                fill-rule='evenodd'
                d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                clip-rule='evenodd'
              />
            </svg>
            <span className='sr-only'>Facebook page</span>
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 17'
            >
              <path
                fill-rule='evenodd'
                d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                clip-rule='evenodd'
              />
            </svg>
            <span className='sr-only'>Twitter page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
