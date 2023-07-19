'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  center?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  tag,
  center,
  className,
}) => {
  return (
    <div className={`${center ? 'text-center ' : 'text-start '}${className}`}>
      <div className='font-bold'>{tag}</div>
      <div className=' font-bold text-5xl mt-2'>{title}</div>
      <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
    </div>
  );
};

export default Heading;
