import classNames from 'classnames';
import React from 'react';

import css from './Input.module.sass';

interface BaseProps {
  label?: string,
  invalid?: boolean,
  error?: string,
  inputClassName?: string,
}

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type Props = BaseProps & InputProps;

export const Input = ({
  type = 'text',
  label,
  required,
  disabled,
  invalid,
  error,
  inputClassName,
  ...props
}: Props) => {
  const inputClassNames = classNames(css.input, inputClassName, {
    [css.inputStateInvalid]: invalid,
    [css.inputStateDisabled]: disabled,
  });

  if (label) {
    return (
      <label className={classNames(css.root, props.className)}>
        <p className={classNames(css.label, {
          [css.labelTypeRequired]: required,
        })}>
          {label}
        </p>

        <input
          {...props}
          type={type}
          disabled={disabled}
          className={inputClassNames}
        />

        {error && (
          <p className={css.error}>
            {error}
          </p>
        )}
      </label>
    );
  }

  return (
    <div className={classNames(css.root, props.className)}>
      <input
        {...props}
        type={type}
        disabled={disabled}
        className={inputClassNames}
      />

      {error && (
          <p className={css.error}>
            {error}
          </p>
        )}
    </div>
  );
};
