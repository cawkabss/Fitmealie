import { ReactNode } from 'react';

import css from './Step.module.sass';

interface Props {
  title?: string,
  children?: ReactNode
}

export const Step = ({
  title,
  children,
}: Props) => {
  return (
    <div className={css.root}>
      {title && (
        <p className={css.title}>
          {title}
        </p>
      )}

      {children}
    </div>
  );
};
