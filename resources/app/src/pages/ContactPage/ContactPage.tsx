import { useState } from 'react';
import classNames from 'classnames';

import { useSendMessageMutation } from 'queries/useSendMessageMutation';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

import { ContactForm, FormData } from './submodules/ContactForm';

import heroBg from './images/bg.jpg';

import css from './ContactPage.module.sass';

interface Notification {
  type: 'error' | 'success',
  message: string,
}

export const ContactPage = () => {
  const { mutate } = useSendMessageMutation({
    onSuccess: () => {
      setNotification({
        type: 'success',
        message: 'Message sent succesfully',
      });
    },
  });
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleContactFormSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <div className={css.root}>
      <Header />
      <Hero
        className={css.hero}
        background={heroBg}
        title='Contact Us'
        subtitle='| Contact Us'
        cta
      />
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>
            Send message
          </h1>
          <div className={css.form}>
            <ContactForm onSubmit={handleContactFormSubmit} />
          </div>

          {notification && (
            <p
              className={classNames(css.notification, {
                [css.notificationThemeSuccess]: notification.type === 'success',
                [css.notificationThemeError]: notification.type === 'error',
              })}
            >
              Message send successfull
            </p>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
};
