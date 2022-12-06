import React, { ReactNode } from 'react';
import css from './Modal.module.sass';

interface Props {
  onClose?: () => void,
  children: ReactNode,
}

export const Modal: React.FC<Props> = ({
  onClose,
  children
}) => {
  return (
    <div className={css.overlay}>
      <div className={css.popup}>
        {children}
        {onClose && (
          <span
            className={css.close}
            onClick={onClose}
          />
        )}
      </div>
    </div>
  );
};
