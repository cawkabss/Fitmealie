import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { IndexPage } from './pages/IndexPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AuthPage } from 'pages/AuthPage';
import { ContactPage } from 'pages/ContactPage';
import { LegalPage } from 'pages/LegalPage';
import { QuizPage } from 'pages/QuizPage';
import { PackagesPage } from 'pages/PackagesPage';
import { PaymentPage } from 'pages/PaymentPage';
import { PaymentStatusPage } from 'pages/PaymentStatusPage';

import './styles.sass';
import { useInitQuery } from 'queries/useInitQuery';
import axios from 'axios';

export const App = () => {
  const { pathname } = useLocation();

  const { isLoading } = useInitQuery();

  useEffect(() => {
    axios.get('/api/user').then((data) => console.log(data));
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path='/'
      >
        <Route
          index
          element={<IndexPage />}
        />
        <Route
          path='blog'
          element={<BlogPage />}
        />
        <Route
          path='blog/:index'
          element={<BlogPostPage />}
        />
        <Route
          path='contact'
          element={<ContactPage />}
        />
        <Route
          path='auth'
          element={<AuthPage />}
        />
        <Route
          path='terms-of-use'
          element={<LegalPage />}
        />
        <Route
          path='privacy-policy'
          element={<LegalPage />}
        />
        <Route
          path='refund-policy'
          element={<LegalPage />}
        />
        <Route
          path='quiz'
          element={<QuizPage />}
        />
        <Route
          path='packages'
          element={<PackagesPage />}
        />
        <Route
          path='payment/:packageId'
          element={<PaymentPage />}
        />
        <Route
          path='payment/status/:status'
          element={<PaymentStatusPage />}
        />
      </Route>
    </Routes>
  )
};
