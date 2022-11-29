import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePaymentFormMutation } from 'queries/usePaymentFormMutation';

import { SimpleHeader } from 'components/SimpleHeader';
import { Copyright } from 'components/Copyright';
import { PaymentForm } from 'components/PaymentForm';

import css from './PaymentPage.module.sass';

export const PaymentPage = () => {
  const { packageId } = useParams();
  const { mutate, data } = usePaymentFormMutation();

  const handleFormMessage = () => {
    // TODO handle post messages
  };

  useEffect(() => {
    mutate({
      package_id: Number(packageId),
    })
  }, []);

  return (
    <div className={css.root}>
      <SimpleHeader />
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>
            <span className={css.highlight}>Get</span> your personal Diet
          </h1>

          {data?.url ? (
            <PaymentForm
              src={data.url}
              onMessage={handleFormMessage}
            />
          ) : (
            <div>
              Loading...
            </div>
          )}
        </div>
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
};
