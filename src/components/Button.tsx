type props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: any;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  className,
  type = 'button',
}: props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        ${outline ? 'bg-transparent' : 'dark:bg-gray-900 bg-blue-500'}
        ${
          outline
            ? 'border-blue-500 dark:border-gray-900'
            : 'dark:border-gray-900 border-blue-500'
        }
        ${outline ? 'text-blue-500 dark:text-gray-900' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1 px-2' : 'py-3 px-5'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
        ${className}
      `}
    >
      {Icon && (
        <div
          className='
          absolute
          left-4
          top-3
        '
        >
          <Icon size={24} />
        </div>
      )}
      {label}
    </button>
  );
};

export default Button;
