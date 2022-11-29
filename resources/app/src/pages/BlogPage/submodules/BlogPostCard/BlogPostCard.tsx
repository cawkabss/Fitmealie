import CalendarIcon from 'assets/icons/calendar.svg';

import { BlogPost } from 'types/interfaces/BlogPost';

import css from './BlogPostCard.module.sass';

interface Props {
  post: BlogPost,
}

export const BlogPostCard: React.FC<Props> = ({
  post,
}) => {
  return (
    <div className={css.root}>
      <div className={css.previewHolder}>
        <img
          src={post.preview}
          alt=""
          className={css.preview}
        />
      </div>
      <div className={css.body}>
        <p className={css.title}>
          {post.title}
        </p>
        <p className={css.description}>
          {post.description}
        </p>
        <time className={css.date}>
          <CalendarIcon
            className={css.dateIcon}
            width='18'
            height='18'
          />
          {post.date}
        </time>
      </div>
    </div>
  );
};
