import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Button } from 'UI/Button';

import { HowItWorksSection } from './submodules/HowItWorksSection';
import { WhatYouGetSection } from './submodules/WhatYouGetSection';
import { ReviewsSection } from './submodules/ReviewsSection';
import { CTASection } from './submodules/CTASection';
import { Footer } from 'components/Footer';

import bg from './images/bg.jpg';

import css from './IndexPage.module.sass';

export const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero
        className={css.hero}
        background={bg}
        title='A Better You Is Coming'
      >
        <p className={css.heroDescription}>
          Tell us a bit about yourself and we’ll create a nutrition plan that's perfect for your goals!
        </p>
        <Button
          className={css.heroButton}
          to='/quiz'
          rounded
        >
          Start your journey
        </Button>
      </Hero>
      <main className={css.main}>
        <HowItWorksSection />
        <WhatYouGetSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
