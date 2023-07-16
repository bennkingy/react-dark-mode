import { ChangeEvent } from 'react';

type props = {
  placeholder?: string;
  label?: string;
  type?: 'button' | 'submit' | 'reset' | 'text' | 'number' | 'email';
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
};

export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  disabled,
}: props) => {
  return (
    <div className='relative z-0 w-full'>
      <input
        type={type}
        // value={value}
        name={name}
        id={id}
        disabled={disabled}
        className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-[1px] border-blue-500 appearance-none text-white dark:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        placeholder={placeholder}
        onChange={onChange}
      />
      <label
        htmlFor='floating_standard'
        className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {/* {label} */}
      </label>
    </div>
  );
};

export default Input;
