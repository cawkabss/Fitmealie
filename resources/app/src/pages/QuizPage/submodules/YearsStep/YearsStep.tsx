import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';

import { Step } from '../Step';
import { QuizInput } from '../QuizInput';

import css from './YearsStep.module.sass';

export interface FormData {
  years: string,
}

interface Props {
  onSubmit: () => void,
}

export const YearsStep = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      years: '',
    }
  });

  return (
    <Step title='How old are you?'>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='years'
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field, fieldState }) => (
            <QuizInput
              placeholder='Years'
              type='number'
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
