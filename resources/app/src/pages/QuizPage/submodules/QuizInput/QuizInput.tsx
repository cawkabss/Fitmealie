import { Input, Props as InputProps } from 'UI/Input';

import css from './QuizInput.module.sass';

interface Props {
  measure?: string,
}

export const QuizInput = ({
  measure,
  ...props
}: InputProps & Props) => {
  return (
    <div className={css.root}>
      {measure && (
        <span className={css.measure}>
          {measure}
        </span>
      )}
      <Input
        {...props}
        className={css.inputWrapper}
        inputClassName={css.input}
      />
    </div>
  );
};
