import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './Button';
import Input from './Input';

const SMSForm = () => {
  const [message, setMessage] = useState({
    to: '',
    body: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  console.log('message', message);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    fetch('http://localhost:3001/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === 'SMS sent successfully') {
          setError(false);
          setSubmitting(false);
          setMessage({
            to: '',
            body: '',
          });
          toast.success('Excellent! We will be in touch shortly.');
        } else {
          setError(true);
          setSubmitting(false);
          toast.success('Sorry! There has been an error.');
        }
      });
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
      {/* <div>
        <label htmlFor='to'>To:</label>
        <input
          type='tel'
          name='to'
          id='to'
          value={message.to}
          onChange={onHandleChange}
        />
      </div> */}
      <p className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
        Send our engineers a text to call back directly below. We aim to call
        you back within 24 hours.
      </p>
      <div className='flex mt-4'>
        <Input
          label='Enter your number'
          placeholder='Enter your number'
          name='body'
          id='body'
          type='number'
          value={message.body}
          onChange={onHandleChange}
        />
        <Button
          type='submit'
          small
          label='Submit'
          outline
          disabled={submitting}
        />
      </div>
    </form>
  );
};

export default SMSForm;
