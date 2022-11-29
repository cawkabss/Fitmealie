import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';
import { Input } from 'UI/Input';
import { Textarea } from 'UI/Textarea';

import css from './ContactForm.module.sass';

export interface FormData {
  name: string,
  email: string,
  message: string,
}

interface Props {
  onSubmit: (data: FormData) => void,
}

export const ContactForm = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const handleSubmitAndReset = (data: FormData) => {
    onSubmit(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitAndReset)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Field is required',
        }}
        render={({ field, fieldState }) => (
          <Input
            className={css.input}
            placeholder='Your name'
            invalid={!!fieldState.error}
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name='email'
        control={control}
        rules={{
          required: 'Field is required',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter a valid email',
          }
        }}
        render={({ field, fieldState }) => (
          <Input
            className={css.input}
            placeholder='Your email'
            invalid={!!fieldState.error}
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name='message'
        control={control}
        rules={{
          required: 'Field is required',
        }}
        render={({ field, fieldState }) => (
          <Textarea
            className={css.input}
            placeholder='Message'
            rows={5}
            invalid={!!fieldState.error}
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Button
        className={css.submit}
        type='submit'
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};
