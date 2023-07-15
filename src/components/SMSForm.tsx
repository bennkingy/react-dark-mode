import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';

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
      .then((data) => {
        if (data.success) {
          setError(false);
          setSubmitting(false);
          setMessage({
            to: '',
            body: '',
          });
        } else {
          setError(true);
          setSubmitting(false);
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
      <div>
        <textarea
          placeholder='Enter your number'
          name='body'
          id='body'
          value={message.body}
          onChange={onHandleChange}
        />
      </div>
      <Button type='submit' label='Submit' disabled={submitting} />
    </form>
  );
};

export default SMSForm;
