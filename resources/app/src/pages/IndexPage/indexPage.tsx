import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SUPPORT_EMAIL } from 'constants/common';
import { useInitQuery } from 'queries/useInitQuery';

import { Button } from 'UI/Button';
import { Modal } from 'UI/Modal';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

import { HowItWorksSection } from './submodules/HowItWorksSection';
import { WhatYouGetSection } from './submodules/WhatYouGetSection';
import { ReviewsSection } from './submodules/ReviewsSection';
import { CTASection } from './submodules/CTASection';

import bg from './images/bg.jpg';

import css from './IndexPage.module.sass';

export const IndexPage = () => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { data } = useInitQuery();

  const handleGoToQuize = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (data?.user) {
      setIsModalVisible(true);
    } else {
      navigate('/quiz')
    }
  };

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
          onClick={handleGoToQuize}
          rounded
        >
          Start your journey
        </Button>
      </Hero>
      <main className={css.main}>
        <HowItWorksSection />
        <WhatYouGetSection />
        <ReviewsSection />
        <CTASection onGoToQuize={handleGoToQuize} />
      </main>
      <Footer />
      {isModalVisible && (
        <Modal onClose={() => setIsModalVisible(false)}>
          You are already a premium user. Please check your inbox or contacts us on email - {SUPPORT_EMAIL}
        </Modal>
      )}
    </div>
  );
};
