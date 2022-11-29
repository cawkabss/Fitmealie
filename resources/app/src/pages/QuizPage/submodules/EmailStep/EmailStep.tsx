import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';

import { Step } from '../Step';
import { QuizInput } from '../QuizInput';

import css from './EmailStep.module.sass';

export interface FormData {
  email: string,
}

interface Props {
  onSubmit: () => void,
}

export const EmailStep = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    }
  });

  return (
    <Step title='Please enter your email to get a personal meal plan'>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <QuizInput
              placeholder='Email'
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
          Next
        </Button>
      </form>
    </Step>
  );
};
