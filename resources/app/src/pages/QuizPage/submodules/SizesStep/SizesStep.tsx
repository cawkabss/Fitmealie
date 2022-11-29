import { useForm, Controller } from 'react-hook-form';

import { Button } from 'UI/Button';

import { Step } from '../Step';
import { QuizInput } from '../QuizInput';

import css from './SizesStep.module.sass';

export interface FormData {
  heightFt: string,
  heightIn: string,
  weight: string,
}

interface Props {
  onSubmit: () => void,
}

export const SizesStep = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      heightFt: '',
      heightIn: '',
      weight: ''
    }
  });

  return (
    <Step title='How tall are you and how much do you weigh?'>
      <form
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={css.row}>
          <div className={css.column}>
            <Controller
              name="heightFt"
              control={control}
              rules={{
                required: 'Field is required',
              }}
              render={({ field, fieldState }) => (
                <QuizInput
                  placeholder='Height (ft)'
                  measure='ft'
                  type='number'
                  invalid={!!fieldState.error}
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className={css.column}>
            <Controller
              name='heightIn'
              control={control}
              rules={{
                required: 'Field is required',
              }}
              render={({ field, fieldState }) => (
                <QuizInput
                  placeholder='Height (in)'
                  measure='in'
                  type='number'
                  invalid={!!fieldState.error}
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className={css.row}>
          <div className={css.column}>
            <Controller
              name='weight'
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
          </div>
        </div>

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
