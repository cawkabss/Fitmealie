import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Copyright } from 'components/Copyright';

import { FooterSection } from './submodules/FooterSection';

import {
  COMPANY_SECTION,
  CONTACTS_SECTION,
  RESOURCES_SECTION,
  SOCIALS_SECTION,
  TERMS_SECTION,
} from './constants';

import css from './Footer.module.sass';

export const Footer = () => {
  return (
    <>
      <footer className={css.root}>
        <div className={css.container}>
          <ul className={css.row}>
            <li className={css.column}>
              <FooterSection title={COMPANY_SECTION.title}>
                <ul className={css.list}>
                  {COMPANY_SECTION.links.map((link, i) => {
                    return (
                      <li
                        key={i}
                        className={css.item}
                      >
                        <Link
                          className={css.link}
                          to={link.url}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FooterSection>
            </li>
            <li className={css.column}>
              <FooterSection title={TERMS_SECTION.title}>
                  <ul className={css.list}>
                    {TERMS_SECTION.links.map((link, i) => {
                      return (
                        <li
                          key={i}
                          className={css.item}
                        >
                          <Link
                            className={css.link}
                            to={link.url}
                          >
                            {link.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </FooterSection>
            </li>
            <li className={css.column}>
              <FooterSection title={RESOURCES_SECTION.title}>
                <ul className={css.list}>
                  {RESOURCES_SECTION.links.map((link, i) => {
                    return (
                      <li
                        key={i}
                        className={css.item}
                      >
                        <Link
                          className={css.link}
                          to={link.url}
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FooterSection>
            </li>
            <li className={css.column}>
              <FooterSection title={SOCIALS_SECTION.title}>
                <ul className={classNames(css.list, css.listTypeRow)}>
                  {SOCIALS_SECTION.links.map((link, i) => {
                    const { icon: Icon } = link;

                    return (
                      <li
                        key={i}
                        className={css.item}
                      >
                        <a
                          className={css.link}
                          href={link.url}
                          target='_blank'
                          rel='nofollow noreferrer noopener'
                        >
                          <Icon
                            width='50'
                            height='50'
                            className={css.social}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </FooterSection>
            </li>
            <li className={css.column}>
              <FooterSection>
                <ul className={css.list}>
                  {CONTACTS_SECTION.links.map((link, i) => {
                    return (
                      <li
                        key={i}
                        className={css.item}
                      >
                        {link.title}
                      </li>
                    );
                  })}
                </ul>
              </FooterSection>
            </li>
          </ul>
        </div>
      </footer>
      <Copyright />
    </>
  );
};
