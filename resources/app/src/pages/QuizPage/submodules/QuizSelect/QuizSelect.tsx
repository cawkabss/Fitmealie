import ArrowIcon from 'assets/icons/arrow.svg';

import css from './QuizSelect.module.sass';

interface Option {
  label: string,
  value: string,
}

interface Props {
  options: Option[],
  onChange: (option: Option) => void,
}

export const QuizSelect = ({
  options,
  onChange,
}: Props) => {
  return (
    <ul className={css.list}>
      {options.map((option) => {
        return (
          <li
            key={option.value}
            className={css.item}
          >
          <button
            className={css.button}
            type='button'
            onClick={() => onChange(option)}
          >
            {option.label}
            <ArrowIcon
              className={css.arrow}
              width='24'
              height='24'
            />
          </button>
          </li>
        );
      })}
    </ul>
  );
};
