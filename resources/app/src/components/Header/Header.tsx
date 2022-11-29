import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames';

import LogoIcon from 'assets/icons/logo.svg';
import BurgerIcon from 'assets/icons/burger.svg';

import { Button } from 'UI/Button';

import { BurgerMenu } from './submodules/BurgerMenu';

import css from './Header.module.sass';
import { useInitQuery } from 'queries/useInitQuery';
import { useLogoutMutation } from 'queries/useLogoutMutation';
import { useQueryClient } from 'react-query';

const NAV_LIST = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/contact',
    label: 'Contact Us',
  },
];

interface Props {
  className?: string,
}

export const Header = ({
  className,
}: Props) => {
  const { data } = useInitQuery();
  const queryClient = useQueryClient()

  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('init');
    },
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    mutate();
  };

  const navList: typeof NAV_LIST = data?.user ? NAV_LIST : NAV_LIST.concat([{ url: '/auth', label: 'Log in' }]);

  return (
    <>
      <header className={classNames(css.root, className)}>
        <div className={css.container}>
          <Link
            to='/'
            className={css.logoLink}
          >
            <LogoIcon
              className={css.logo}
              width="206"
              height="35"
            />
          </Link>

          <button
            type='button'
            className={css.burger}
            onClick={handleMenuOpen}
          >
            <BurgerIcon
              className={css.burgerIcon}
              width='30'
              height='30'
            />
          </button>
          
          <nav className={css.nav}>
            <ul className={css.navList}>
              {navList.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={css.navItem}
                  >
                    <NavLink
                      className={({ isActive }) => {
                        return classNames(css.navLink, {
                          [css.navLinkStateActive]: isActive,
                        })
                      }}
                      to={item.url}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
              {data?.user ? (
                <li className={classNames(css.navItem, css.navItemTypeAuth)}>
                  <p className={css.email}>
                    {data.user.email}
                  </p>
                  <button
                    type='button'
                    className={css.logout}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className={css.navItem}>
                  <Button
                    className={css.button}
                    theme='primary'
                    to='/quiz'
                    rounded
                  >
                    Get started now
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
      >
        <ul className={css.navList}>
          {NAV_LIST.map((item, i) => {
            return (
              <li
                key={i}
                className={css.navItem}
              >
                <NavLink
                  className={({ isActive }) => {
                    return classNames(css.navLink, {
                      [css.navLinkStateActive]: isActive,
                    })
                  }}
                  to={item.url}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
          {data?.user ? (
            <li className={css.navItem}>
              <p className={css.email}>
                {data.user.email}
              </p>
              <button
                type='button'
                className={css.logout}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className={css.navItem}>
              <Button
                className={css.button}
                theme='primary'
                to='/quiz'
                rounded
              >
                Get started now
              </Button>
            </li>
          )}
        </ul>
      </BurgerMenu>
    </>
  );
};
