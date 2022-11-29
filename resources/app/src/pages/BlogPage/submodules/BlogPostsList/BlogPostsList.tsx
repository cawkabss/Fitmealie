import { Link } from 'react-router-dom';

import { BlogPost } from 'types/interfaces/BlogPost';

import { BlogPostCard } from '../BlogPostCard';

import css from './BlogPostsList.module.sass';

interface Props {
  posts: BlogPost[],
}

export const BlogPostsList = ({
  posts,
}: Props) => {
  return (
    <div className={css.root}>
      <div className={css.container}>
        <ul className={css.list}>
          {posts.map((post, i) => {
            return (
              <li
                key={i}
                className={css.item}
              >
                <Link
                  className={css.link}
                  to={`/blog/${i + 1}`}
                >
                  <BlogPostCard post={post} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
