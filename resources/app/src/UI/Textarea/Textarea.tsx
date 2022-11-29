import classNames from 'classnames';
import React from 'react';

import css from './Textarea.module.sass';

interface BaseProps {
  label?: string,
  invalid?: boolean,
  error?: string,
  textarealClassName?: string,
}
type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const Textarea = ({
  label,
  required,
  disabled,
  invalid,
  error,
  textarealClassName,
  ...props
}: BaseProps & TextareaProps) => {
  const textarealClassNames = classNames(css.input, textarealClassName, {
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

        <textarea
          {...props}
          disabled={disabled}
          className={textarealClassNames}
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
      <textarea
        {...props}
        disabled={disabled}
        className={textarealClassNames}
      />

      {error && (
        <p className={css.error}>
          {error}
        </p>
      )}
    </div>
  );
};
