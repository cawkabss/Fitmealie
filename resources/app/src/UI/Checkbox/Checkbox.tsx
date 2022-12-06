import classNames from 'classnames';

import css from './Checkbox.module.sass';

interface BaseProps {
  label?: string,
}

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = BaseProps & InputProps

export const Checkbox = ({
  checked,
  className,
  onChange,
  children,
  ...props
}: Props) => {
  return (
    <label className={classNames(css.root, className)}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className={classNames(css.input, {
          [css.inputStateChecked]: checked,
        })}
        {...props}
      />
      {children && (
        <span className={css.label}>
          {children}
        </span>
      )}
    </label>
  );
};
