import { slide as Menu, Props } from 'react-burger-menu';

import LogoIcon from 'assets/icons/logo.svg';
import CrossIcon from 'assets/icons/cross.svg';

import css from './BurgerMenu.module.sass';

export const BurgerMenu = ({
  children,
  ...props
}: Props) => {
  return (
    <Menu
      burgerButtonClassName={css.burgerButton}
      crossButtonClassName={css.crossButton}
      customCrossIcon={(
        <CrossIcon
          className={css.crossIcon}
          width='30'
          height='30'
        />
      )}
      width='100%'
      right
      {...props}
    >
      <LogoIcon
        className={css.logo}
        width='150'
        height='26'
      />
      {children}
    </Menu>
  );
};
