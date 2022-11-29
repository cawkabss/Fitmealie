import { ReactNode } from 'react';
import classNames from 'classnames';

import ArrowIcon from 'assets/icons/arrow.svg';

import { Button } from 'UI/Button';

import css from './Hero.module.sass';

interface Props {
  title?: string,
  subtitle?: string,
  cta?: boolean,
  background?: string,
  className?: string,
  children?: ReactNode
}

export const Hero: React.FC<Props> = ({
  title,
  subtitle,
  cta,
  background,
  className,
  children,
}) => {
  return (
    <section
      className={classNames(css.root, className)}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {title && (
        <h2 className={css.title}>
          {title}
        </h2>
      )}

      {cta && (
        <div className={css.cta}>
          <Button
            className={css.button}
            to='/quiz'
            rounded
          >
            <ArrowIcon
              className={css.arrow}
              width='23'
              height='23'
            />
            Back to quiz
          </Button>
          <p className={css.subtitle}>
            {subtitle}
          </p>
        </div>
      )}
      {children}
    </section>
  );
};
