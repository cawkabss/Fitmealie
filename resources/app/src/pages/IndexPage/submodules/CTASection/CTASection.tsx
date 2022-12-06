import React from 'react';
import { Button } from 'UI/Button';
import css from './CTASection.module.sass';

import imgDesktop from './images/img.png';

interface Props {
  onGoToQuize: (e: React.SyntheticEvent<HTMLAnchorElement>) => void,
}

export const CTASection: React.FC<Props> = ({
  onGoToQuize,
}) => {
  return (
    <section className={css.root}>
      <div className={css.container}>
        <div className={css.row}>
          <div className={css.column}>
            <img
              className={css.img}
              src={imgDesktop}
              alt=""
            />
          </div>
          <div className={css.column}>
            <p className={css.title}>
              <span className={css.highlight}>Find out how fast you can reach</span> your weight loss goal
            </p>
            <Button
              className={css.button}
              theme='accent'
              to='/quiz'
              onClick={onGoToQuize}
              rounded
            >
              Take a quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
