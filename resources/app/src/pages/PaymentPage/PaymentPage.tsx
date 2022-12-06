import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { SUPPORT_EMAIL } from 'constants/common';
import { getPackagePriceWithDiscount } from 'utils/package';
import { useInitQuery } from 'queries/useInitQuery';
import { usePaymentFormMutation } from 'queries/usePaymentFormMutation';

import { Checkbox } from 'UI/Checkbox';
import { SimpleHeader } from 'components/SimpleHeader';
import { Copyright } from 'components/Copyright';
import { PaymentForm } from 'components/PaymentForm';

import css from './PaymentPage.module.sass';
import classNames from 'classnames';

export const PaymentPage = () => {
  const { packageId } = useParams();

  const { data: initData } = useInitQuery();
  const { mutate, data } = usePaymentFormMutation();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleFormMessage = () => {
    // TODO handle post messages
  };

  const handleTermsToggle = () => {
    setIsTermsAccepted((prev) => !prev);
  };

  useEffect(() => {
    mutate({
      package_id: Number(packageId),
    })
  }, []);

  const pack = initData?.packages.find((p) => p.id === Number(packageId));

  return (
    <div className={css.root}>
      <SimpleHeader />
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>
            <span className={css.highlight}>Get</span> your personal Diet
          </h1>

          {data?.url ? (
            <div className={css.form}>
              <PaymentForm
                className={classNames(css.iframe, {
                  [css.iframeStateDisabled]: !isTermsAccepted,
                })}
                src={data.url}
                onMessage={handleFormMessage}
              />

              <Checkbox
                className={css.terms}
                checked={isTermsAccepted}
                onChange={handleTermsToggle}
              >
                By submitting this form, I certify that I am 18 years of age or older and that I agree to the
                &nbsp;
                <Link
                  className={css.link}
                  to='/terms-of-use'
                >
                  Terms & Conditions
                </Link>
                &nbsp;
                and have read the
                &nbsp;
                <Link
                  className={css.link}
                  to='/privacy-policy'
                >
                  Privacy Policy
                </Link>
                &nbsp;
                and
                &nbsp;
                <Link
                  className={css.link}
                  to='/refund-policy'
                >
                  Refund Policy
                </Link>.
              </Checkbox>
            </div>
          ) : (
            <div>
              Loading...
            </div>
          )}
        </div>
        {pack?.trial ? (
          <p className={css.termsFull}>
            I expressly agree to get a free {pack.name} membership to
            &nbsp;
            <Link
              className={css.link}
              to='/'
            >
              fitmealie.com
            </Link>
            , which will after be converted into a paid subscription, based on the terms and price as described below. 
            We will make a {pack?.currency} {getPackagePriceWithDiscount(pack)} charge to verify your card data. The charge will be refunded 
            to your card within 7 days.I expressly agree to the immediate supply of service and acknowledge the loss of 
            the right to withdraw during the cooling-off period.Recurring billing. Cancel anytime. 
            Unless you cancel your membership at least 1 hour before the end of the package expiration date, you 
            will be automatically charged {pack?.currency} {pack?.recPrice} every {pack?.duration_int} days. 
            The subscription renews automatically until you cancel such a subscription. To avoid being charged, cancel 
            the subscription by contacting our support at {SUPPORT_EMAIL}. This charge will appear on your cardholder 
            statement as [DESCRIPTOR].
          </p>
        ) : (
          <p className={css.termsFull}>
            I expressly agree to get an {pack?.duration_int} day(s) membership to
            &nbsp;
            <Link
              className={css.link}
              to='/'
            >
              fitmealie.com
            </Link>
            &nbsp;
            for {pack?.currency} {pack?.price}, which will be converted into a paid subscription, 
            based on the terms and price as described below.I expressly agree on the immediate 
            supply of service and acknowledge the loss of the right to withdraw during 
            the cooling-off period.Recurring billing. Cancel anytime. 
            Unless you cancel your membership at least 1 hour before the end of the package 
            expiration date, you will be automatically charged {pack?.currency} {pack?.recPrice} every {pack?.duration_int} days. 
            The subscription renews automatically until you cancel such a subscription. 
            To avoid being charged, cancel the subscription by contacting our support at {SUPPORT_EMAIL}. 
            This charge will appear on your cardholder statement as [DESCRIPTOR]
          </p>
        )}
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
};
