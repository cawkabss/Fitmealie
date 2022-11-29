import { Link } from 'react-router-dom';

import LogoIcon from 'assets/icons/logo.svg';

import css from './SimpleHeader.module.sass';

export const SimpleHeader = () => {
  return (
    <header className={css.root}>
      <Link
        className={css.link}
        to='/'
      >
        <LogoIcon
          className={css.logo}
          width="206"
          height="35"
        />
      </Link>
    </header>
  );
};
