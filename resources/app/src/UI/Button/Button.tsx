import { ReactElement } from 'react';
import {
  Link,
  LinkProps,
} from 'react-router-dom';
import classNames from 'classnames';

import css from './Button.module.sass';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

interface BaseProps {
  theme?: 'primary' | 'accent',
  rounded?: boolean,
  fullWidth?: boolean,
}
type Props = ButtonProps | AnchorProps | LinkProps;

const assertAnchorProps = (props: Props): props is AnchorProps => {
  return 'href' in props;
};

const assertLinkProps = (props: Props): props is LinkProps => {
  return 'to' in props;
};

export function Button(props: BaseProps & LinkProps): React.ReactElement;
export function Button(props: BaseProps & AnchorProps): ReactElement;
export function Button(props: BaseProps & ButtonProps): ReactElement;
export function Button({
  theme,
  rounded,
  fullWidth,
  ...props
}: BaseProps & Props): ReactElement {

  const className = classNames(css.root, props.className, {
    [css.rootThemePrimary]: theme === 'primary' || !theme,
    [css.rootThemeAccent]: theme === 'accent',
    [css.rootTypeRounded]: rounded,
    [css.rootTypeFullWidth]: fullWidth,
  });

  if (assertAnchorProps(props)) {
    return (
      <a
        {...props}
        className={className}
      >
        {props.children}
      </a>
    );
  }

  if (assertLinkProps(props)) {
    return (
      <Link
        {...props}
        className={className}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={className}
    >
      {props.children}
    </button>
  );
};
