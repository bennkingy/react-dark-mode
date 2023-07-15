import { useState } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal';
import Modal from './Modal';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = <div className='flex flex-col gap-4'>Submit your details here to get a quote.</div>;
  const footerContent = <div className='flex flex-col gap-4 mt-3'>We will respond within 24 hours.</div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Get A Quote'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={() => console.log('submit')}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
