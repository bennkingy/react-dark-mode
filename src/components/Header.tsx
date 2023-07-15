import { Turn as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';

const Header = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>();

  const toggleMenu = (forceClose?: boolean) => {
    setIsMenuOpen(forceClose ? false : !isMenuOpen);
  };

  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const MobileMenu = () => {
    return (
      <div
        className='
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-[1]
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        '
      >
        <div className='h-full w-[calc(100vw-100px)] z-50 absolute dark:bg-gray-700 md:hidden'>
          <ul className='flex flex-col mt-20 font-medium'>
            <li>
              <a
                href='/'
                className='block py-2 pl-3 pr-4 font-semibold	border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <button
                id='mega-menu-dropdown-button'
                onClick={() => {
                  toggleMenu();
                }}
                className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services{' '}
                <svg
                  className='w-2.5 h-2.5 ml-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {isMenuOpen ? (
                <div
                  id='mega-menu-dropdown'
                  className='z-10 grid w-auto grid-cols-2 text-sm  dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700'
                >
                  <div className='p-4 pb-0 text-white md:pb-4 dark:text-white'>
                    <ul
                      className='space-y-4'
                      aria-labelledby='mega-menu-dropdown-button'
                    >
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='p-4 pb-0 text-white md:pb-4 dark:text-white'>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Playground
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='p-4'>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                        >
                          Support Center
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </li>
            <li>
              <a
                href='/'
                className={`block py-2 pl-3 pr-4 ${
                  !isFixed ? 'text-white' : 'text-black'
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className={`block py-2 pl-3 pr-4 ${
                  !isFixed ? 'text-white' : 'text-black'
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const isMediumWidth = window.innerWidth <= 768; // Adjust the width breakpoint as needed
      if (!isMediumWidth) {
        setIsMenuMobileOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMenuMobileOpen && <MobileMenu />}
      <Headroom
        onUnfix={() => setIsFixed(false)}
        onPin={() => setIsFixed(true)}
        onUnpin={() => {
          toggleMenu(true);
        }}
      >
        <nav
          className={`h-[70px] border-gray-200 transition-colors ${
            !isFixed ? 'bg-transparent text-white' : 'bg-white'
          }`}
        >
          <div className='flex h-full flex-wrap items-center justify-between max-w-screen-xl mx-auto px-4'>
            <a href='/' className='flex items-center'>
              <span
                className={`self-center text-2xl font-semibold whitespace-nowrap ${
                  !isFixed ? 'text-white' : 'text-black'
                }`}
              >
                Plumbers
              </span>
            </a>
            <div className='flex items-center md:order-2'>
              <div
                className={`hidden md:flex flex-row items-center ${
                  !isFixed ? 'text-white' : 'text-black'
                }`}
              >
                <svg
                  className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300 dark:fill-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                  <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
                </svg>
                <div className='flex flex-col ml-2'>
                  <div className='mb-0 pb-0 font-semibold'>07497-497-583</div>
                  <div className='-mt-[2px] text-xs'>Make a call</div>
                </div>
              </div>
              <div className='md:hidden relative z-50' style={{ zIndex: 9999 }}>
                <Hamburger
                  toggled={isMenuMobileOpen}
                  toggle={toggleMenuMobile}
                  size={23}
                />
              </div>
            </div>
            <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
              <ul className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'>
                <li>
                  <a
                    href='/'
                    className='block py-2 pl-3 pr-4 font-semibold	border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 dark:text-gray-900'
                    aria-current='page'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <button
                    id='mega-menu-dropdown-button'
                    onClick={() => {
                      toggleMenu();
                    }}
                    className={`block py-2 pl-3 pr-4 ${
                      !isFixed ? 'text-white' : 'text-black'
                    } flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium  border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Services{' '}
                    <svg
                      className='w-2.5 h-2.5 ml-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='m1 1 4 4 4-4'
                      />
                    </svg>
                  </button>
                  {isMenuOpen ? (
                    <div
                      id='mega-menu-dropdown'
                      className='absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700'
                    >
                      <div className='p-4 pb-0 text-white md:pb-4 dark:text-white'>
                        <ul
                          className='space-y-4'
                          aria-labelledby='mega-menu-dropdown-button'
                        >
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Library
                            </a>
                          </li>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Resources
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='p-4 pb-0 text-white md:pb-4 dark:text-white'>
                        <ul className='space-y-4'>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Newsletter
                            </a>
                          </li>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Playground
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='p-4'>
                        <ul className='space-y-4'>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              href='/'
                              className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500'
                            >
                              Support Center
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li>
                  <a
                    href='/'
                    className={`block py-2 pl-3 pr-4 ${
                      !isFixed ? 'text-white' : 'text-black'
                    } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className={`block py-2 pl-3 pr-4 ${
                      !isFixed ? 'text-white' : 'text-black'
                    } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Header;
