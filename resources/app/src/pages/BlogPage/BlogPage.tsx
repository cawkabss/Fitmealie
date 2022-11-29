import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

import { BlogPostsList } from './submodules/BlogPostsList';

import { BLOG_POSTS } from 'blog';

import heroBg from './images/bg.jpg';

import css from './BlogPage.module.sass';

export const BlogPage = () => {
  return (
    <div className={css.root}>
      <Header />
      <Hero
        className={css.hero}
        background={heroBg}
        title='Blog'
        subtitle='| Your personal Recipe'
        cta
      />
      <BlogPostsList posts={BLOG_POSTS} />
      <Footer />
    </div>
  );
};
