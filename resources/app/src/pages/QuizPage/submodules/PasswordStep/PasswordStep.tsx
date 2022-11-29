import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';

import { Step } from '../Step';
import { QuizInput } from '../QuizInput';

import css from './PasswordStep.module.sass';

export interface FormData {
  password: string,
}

interface Props {
  onSubmit: () => void,
}

export const PasswordStep = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      password: '',
    }
  });

  return (
    <Step title='Please choose a password'>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='password'
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field, fieldState }) => (
            <QuizInput
              placeholder='Password'
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
