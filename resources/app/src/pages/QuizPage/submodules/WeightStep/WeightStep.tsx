import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';

import { Step } from '../Step';
import { QuizInput } from '../QuizInput';

import css from './WeightStep.module.sass';

export interface FormData {
  weightLb: string,
}

interface Props {
  onSubmit: () => void,
}

export const WeightStep = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      weightLb: '',
    }
  });

  return (
    <Step title='What is your desired weight?'>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='weightLb'
          control={control}
          rules={{
            required: 'Field is required',
          }}
          render={({ field, fieldState }) => (
            <QuizInput
              placeholder='Weight (lb)'
              measure='lb'
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
