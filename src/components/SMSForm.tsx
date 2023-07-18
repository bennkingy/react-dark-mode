import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './Button';
import Input from './Input';

const SMSForm = () => {
  const [message, setMessage] = useState({
    body: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  console.log('message', message.body);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:3001/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      const data = await res.json();
      if (data === 'SMS sent successfully') {
        setError(false);
        toast.success('Excellent! We will be in touch shortly.');
        setMessage({ body: '' });
      } else {
        setError(true);
        toast.success('Sorry! There has been an error.');
      }
    } catch (error) {
      setError(true);
      toast.error('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const onHandleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className={error ? 'error sms-form' : 'sms-form'}>
      <p className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
        Send our engineers a text with your number to call you. Expect one our
        friendly engineers to call within 24 hours.
      </p>
      <div className='flex mt-4'>
        <Input
          // className='w-full'
          label='Enter your number'
          placeholder='Enter your number'
          name='body'
          id='body'
          type='number'
          value={message.body}
          onChange={onHandleChange}
        />
        <Button
          className='flex-1 bg-white border-white text-gray-900 font-bold max-w-[100px] min-w-[100px]'
          type='submit'
          small
          label='Call me back'
          outline
          disabled={submitting}
        />
      </div>
    </form>
  );
};

export default SMSForm;
