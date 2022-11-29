import { SectionTitle } from '../SectionTitle';

import avatar1 from './images/avatar-1.png';
import avatar2 from './images/avatar-2.png';
import avatar3 from './images/avatar-3.png';
import avatar4 from './images/avatar-4.png';

import css from './ReviewsSection.module.sass';

const REVIEWS = [
  {
    username: 'Maren Dias',
    message: 'This app is a real gem! I started preparing the meals that were recommended to me and I feel positively glowing. I have so much more energy to work, study, and meet up with my friends. And, I have already started losing weight, although it’s only been a couple of weeks. In other words, give it a try, you won’t be disappointed!',
    avatar: avatar1,
  },
  {
    username: 'Alex Saunders',
    message: ' I’ve always been very cautious of such apps. They always promise too much and turn out to be useless. But a friend recommended this specific app, so I tried and didn’t regret it! I’ve learned a lot about my bodily functions and what influences what. If you have no clue what you should or shouldn’t eat, check out this app.',
    avatar: avatar2,
  },
  {
    username: 'Kierra Curtis',
    message: 'I am battling depression so I needed something light and energy-saving. The recipes in the app are pretty easy and delicious, plus the workouts are doable and I managed to keep the streak for 6 days already without bailing. That rarely happens to me, so I am very grateful that this amazing app exists!',
    avatar: avatar3,
  },
  {
    username: 'Carolina Blanc',
    message: 'They give you meal plans that are uniquely tailored to your health and needs. That specified approach is a really big tell for me that there are specialists working there, not some incompetents. Plus, the suggested workouts make me feel fit from the first try. Love it so far.',
    avatar: avatar4,
  },
];

export const ReviewsSection = () => {
  return (
    <div className={css.root}>
      <div className={css.container}>
        <SectionTitle title='What users say about us?' />

        <ul className={css.list}>
          {REVIEWS.map((review, i) => {
            return (
              <li
                key={i}
                className={css.item}
              >
                <div className={css.review}>
                  <p className={css.message}>
                    {review.message}
                  </p>
                  <img
                    className={css.avatar}
                    src={review.avatar}
                    width='80'
                    height='80'
                    alt={review.username}
                  />
                  <p className={css.username}>
                    {review.username}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};
