import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from 'react-query';
import { useLoginMutation } from 'queries/useLoginMutation';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

import { LoginForm, FormData } from './submodules/LoginForm';

import heroBg from './images/bg.jpg';

import css from './AuthPage.module.sass';

export const AuthPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [error, setError] = useState('asdasdas');

  const { mutate } = useLoginMutation({
    onSuccess: (data) => {
      if (data.user) {
        queryClient.invalidateQueries('init');
        navigate('/');
      } else {
        setError(data.error || 'Something went wrong. Please try again later');
      }
    },
  });

  const handleLoginFormSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <div className={css.root}>
      <Header />
      <Hero
        className={css.hero}
        background={heroBg}
        title='My Account'
        subtitle='| My Account'
        cta
      />
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>
            Login
          </h1>
          <div className={css.form}>
            <LoginForm onSubmit={handleLoginFormSubmit} />
          </div>
          {error && (
            <p className={css.error}>
              {error}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
