import classNames from 'classnames';

import CalendarIcon from 'assets/icons/calendar.svg';

import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import css from './BlogPost.module.sass';

interface Props {
  post: BlogPost,
}

export const Post: React.FC<Props> = ({
  post,
}) => {
  return (
    <article className={css.root}>
      <h1 className={css.title}>
        {post.title}
      </h1>
      <time className={css.date}>
        <CalendarIcon
          className={css.dateIcon}
          width='18'
          height='18'
        />
        {post.date}
      </time>

      {post.content.map((block, i) => {
        if (
          block.type === BlogPostContent.Title1 ||
          block.type === BlogPostContent.Title2 ||
          block.type === BlogPostContent.Title3
        ) {
          return (
            <h2
              key={i}
              className={classNames(css.title, {
                [css.titleType1]: block.type === BlogPostContent.Title1,
                [css.titleType2]: block.type === BlogPostContent.Title2,
                [css.titleType3]: block.type === BlogPostContent.Title3,
              })}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === BlogPostContent.Paragraph) {
          return (
            <p
              key={i}
              className={css.paragraph}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === BlogPostContent.List) {
          return (
            <ul
              key={i}
              className={css.list}
            >
              {block.items.map((item, j) => {
                return (
                  <li
                    key={j}
                    className={css.item}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          );
        }

        if (block.type === BlogPostContent.Image) {
          return (
            <img
              className={css.image}
              src={block.src}
              alt=""
            />
          );
        }

        return null;
      })}
    </article>
  );
};
