import { SectionTitle } from '../SectionTitle';

import step1Bg from './images/step-1.jpg';
import step2Bg from './images/step-2.jpg';
import step3Bg from './images/step-3.jpg';

import css from './HowItWorksSection.module.sass';

const STEPS = [
  {
    title: 'Take a quiz and make the payment',
    bg: step1Bg,
  },
  {
    title: 'Customer support will contact you to discuss the details',
    bg: step2Bg,
  },
  {
    title: 'Get your personalized meal plan',
    bg: step3Bg,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className={css.root}>
      <div className={css.container}>
        <SectionTitle title='How does it work' />
        <ul className={css.list}>
          {STEPS.map((step, i) => {
            const num = i + 1;

            return (
              <li
                key={i}
                className={css.item}
                style={{
                  backgroundImage: `url(${step.bg})`,
                }}
              >
                <span className={css.label}>
                  {`Step ${num}`}
                </span>
                <p className={css.title}>
                  {step.title}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
};
