import Button from './Button';

type props = {
  height?: string; // e.g. 'h-[70vh]' or 'h-[50vh]'
  title?: string; // e.g. 'Mallard Plumbing and Heating'
  subtitle?: string; // e.g. 'From checkout to global sales......'
  cta?: {
    label: string; // e.g. 'Get a quote'
    onClick: () => void; // e.g. () => registerModal.onOpen()
  };
  cta2?: {
    label: string; // e.g. 'Get a quote'
    onClick: () => void; // e.g. () => registerModal.onOpen()
  };
};

const Hero = ({ height = 'h-[70vh]', cta, cta2, title, subtitle }: props) => {
  return (
    <section
      className={`-mt-[72px] pt-[72px] bg-[url('https://as1.ftcdn.net/v2/jpg/03/88/93/22/1000_F_388932211_RuO271Qr1diwiSptd2Ncnd7TC3N3O5cg.jpg')] bg-hero bg-no-repeat bg-cover bg-center ${height}`}
    >
      <div className={`-mt-[72px] pt-[72px] backdrop-brightness-50 ${height}`}>
        <div className='h-full grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-6'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-white'>
              {title}
            </h1>
            <p className='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white'>
              {subtitle}
            </p>
            {cta && (
              <Button
                onClick={() => {
                  cta?.onClick();
                }}
                label={cta?.label}
              />
            )}
            {cta2 && (
              <Button
                outline
                onClick={() => {
                  cta2?.onClick();
                }}
                label={cta2?.label}
                className='ml-3'
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
