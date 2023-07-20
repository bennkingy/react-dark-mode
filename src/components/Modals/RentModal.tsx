import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useRentModal from '../../hooks/useRentModal';
import CategoryInput from '../CategoryInput';
import CountrySelect from '../CountySelect';
import Heading from '../Heading';
import Input from '../Input';
import Map from '../Map';
import { categories } from '../Services';
import Modal from './Modal';

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  // INFO = 2,
  IMAGES = 2,
  DESCRIPTION = 3,
  PRICE = 4,
}

const RentModal = () => {
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const location = watch('location');
  const category = watch('category');
  const guestCount = watch('guestCount');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const [isImageSelected, setIsImageSelected] = useState(false);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step === STEPS.IMAGES && !isImageSelected) {
      toast.error('Please add a photo of your place.');
      return;
    }

    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Select the service you require'
        titleSize='text-3xl'
        subtitle='Pick a service'
      />
      <div
        className='
          grid 
          grid-cols-2
          gap-3
          max-h-[60vh]
          md:max-h-[50vh]
          overflow-y-auto
          p-2
        '
      >
        {categories.map((item) => (
          <div key={item.label} className='col-span-1 text-red'>
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Where is your home located?'
          subtitle='Pick a reigon'
          titleSize='text-3xl'
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  // if (step === STEPS.INFO) {
  //   bodyContent = (
  //     <div className='flex flex-col gap-8'>
  //       <Heading
  //         title='Share some basics about your place'
  //         subtitle='What amenitis do you have?'
  // titleSize = 'text-3xl';
  //       />
  //       <Counter
  //         onChange={(value) => setCustomValue('guestCount', value)}
  //         value={guestCount}
  //         title='Guests'
  //         subtitle='How many guests do you allow?'
  //       />
  //       <hr />
  //       <Counter
  //         onChange={(value) => setCustomValue('roomCount', value)}
  //         value={roomCount}
  //         title='Rooms'
  //         subtitle='How many rooms do you have?'
  //       />
  //       <hr />
  //       <Counter
  //         onChange={(value) => setCustomValue('bathroomCount', value)}
  //         value={bathroomCount}
  //         title='Bathrooms'
  //         subtitle='How many bathrooms do you have?'
  //       />
  //     </div>
  //   );
  // }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Want to add a photo?'
          subtitle='Upload an image'
          titleSize='text-3xl'
        />
        {/* <ImageUpload
          onChange={(value) => {
            setCustomValue('imageSrc', value);
            setIsImageSelected(!!value);
          }}
          value={imageSrc}
        /> */}
        {/* {!isImageSelected && (
          <span className='text-red-600'>
            Please add a photo of your place.
          </span>
        )} */}
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='How would you describe your place?'
          subtitle='Short and sweet works best!'
          titleSize='text-3xl'
        />
        <Input id='title' label='Title' disabled={isLoading} />
        <hr />
        <Input id='description' label='Description' disabled={isLoading} />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Now, set your price'
          subtitle='How much do you charge per night?'
          titleSize='text-3xl'
        />
        <Input id='price' label='Price' type='number' disabled={isLoading} />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      body={bodyContent}
      title='Get a quote!'
      actionLabel={actionLabel}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      footer={''}
    />
  );
};

export default RentModal;
