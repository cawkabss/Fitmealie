import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from 'UI/Button';
import { Input } from 'UI/Input';

import css from './LoginForm.module.sass';

export interface FormData {
  email: string,
  password: string,
}

interface Props {
  onSubmit: (data: FormData) => void,
}

export const LoginForm = ({
  onSubmit,
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            label='Email adress'
            placeholder='Your email'
            invalid={!!fieldState.error}
            error={fieldState.error?.message}
            required
            {...field}
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        rules={{
          required: 'Field is required',
        }}
        render={({ field, fieldState }) => (
          <Input
            className={css.input}
            type='password'
            label='Password'
            placeholder='Your password'
            invalid={!!fieldState.error}
            error={fieldState.error?.message}
            required
            {...field}
          />
        )}
      />

      <Button
        className={css.submit}
        type='submit'
        fullWidth
      >
        Log in
      </Button>

      <div className={css.restore}>
        <Link
          className={css.restoreLink}
          to='/contact'
        >
          Lost your password?
        </Link>
      </div>
    </form>
  );
};
