import { useLocation } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { TermsOfUse } from './submodules/TermsOfUse';
import { PrivacyPolicy } from './submodules/PrivacyPolicy';
import { RefundPolicy } from './submodules/RefundPolicy';

import css from './LegalPage.module.sass';


export const LegalPage = () => {
  const { pathname } = useLocation();

  const isTermsOfUsePage = pathname === '/terms-of-use';
  const isPrivacyPolicyPage = pathname === '/privacy-policy';
  const isRefundPolicyPage = pathname === '/refund-policy';

  return (
    <div className={css.root}>
      <Header className={css.header} />
      <main className={css.main}>
        <div className={css.container}>
          {isPrivacyPolicyPage && (
            <PrivacyPolicy />
          )}
          {isRefundPolicyPage && (
            <RefundPolicy />
          )}
          {isTermsOfUsePage && (
            <TermsOfUse />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
