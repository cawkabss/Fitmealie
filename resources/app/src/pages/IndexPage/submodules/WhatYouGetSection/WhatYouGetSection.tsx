import { SectionTitle } from '../SectionTitle';

import benefitPreview1 from './images/benefit-1.jpg';
import benefitPreview2 from './images/benefit-2.jpg';
import benefitPreview3 from './images/benefit-3.jpg';
import benefitPreview4 from './images/benefit-4.jpg';

import css from './WhatYouGetSection.module.sass';

const BENEFITS_LIST = [
  {
    title: 'Personalized meal plan',
    description: 'Step-by-step recipes that will help you reach your weight goals and enhance your eating lifestyle.',
    preview: benefitPreview1,
  },
  {
    title: 'Efficient workouts',
    description: 'Workouts that are designed to help you achieve the best results when combined with a healthy diet.',
    preview: benefitPreview2,
  },
  {
    title: '24/7 support',
    description: 'Don’t hesitate to contact us anytime and we’ll answer in no time!',
    preview: benefitPreview3,
  },
  {
    title: 'Exclusive content',
    description: 'Unique articles written by experts that will pave your way to a healthy and stress-less lifestyle.',
    preview: benefitPreview4,
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className={css.root}>
      <div className={css.container}>
        <SectionTitle title='What will you get?' />
        <ul className={css.list}>
          {BENEFITS_LIST.map((benefit, i) => {
            return (
              <li
                key={i}
                className={css.item}
              >
                <img
                  className={css.preview}
                  src={benefit.preview}
                  width='440px'
                  height='250'
                  alt=""
                />
                <div className={css.content}>
                  <p className={css.title}>
                    {benefit.title}
                  </p>
                  <p className={css.description}>
                    {benefit.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
};
