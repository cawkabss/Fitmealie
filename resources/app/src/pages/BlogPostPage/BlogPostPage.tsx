import { useParams } from 'react-router-dom';

import { BLOG_POSTS } from 'blog';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

import { Post } from './submodules/BlogPost';

import css from './BlogPostPage.module.sass';

export const BlogPostPage = () => {
  const { index } = useParams();

  const post = (index && BLOG_POSTS[parseInt(index, 10) - 1]) || BLOG_POSTS[0];

  return (
    <div className={css.root}>
      <Header />
      <Hero
        className={css.hero}
        background={post.hero}
      />
      <main className={css.main}>
        <Post post={post} />
      </main>
      <Footer />
    </div>
  );
};
