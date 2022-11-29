import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

import CheckIcon from 'assets/icons/check.svg';
import CrossIcon from 'assets/icons/cross.svg';
import ArrowIcon from 'assets/icons/arrow.svg';

import { Copyright } from 'components/Copyright';
import { SimpleHeader } from 'components/SimpleHeader';

import css from './PaymentStatusPage.module.sass';

const STATUS_ICON = {
  SUCCESS: CheckIcon,
  FAIL: CrossIcon,
};

const STATUS_TITLE = {
  SUCCESS: 'Payment Success',
  FAIL: 'Payment unsuccessful :(',
};

const STATUS_DESCRIPTION = {
  SUCCESS: 'Thanks for your payment! We will contact you via email to discuss additional details and send your meal plan.',
  FAIL: 'Please check your credit card information and try again. Please make sure the details you entered are correct and you have enough funds for the purchase.',
};

const STATUS_BUTTON = {
  SUCCESS: 'Back to home',
  FAIL: 'Back to payment',
};

export const PaymentStatusPage = () => {
  const { status } = useParams();
  const navigate = useNavigate();

  const isSuccess = status === 'success';
  const Icon = isSuccess ? STATUS_ICON.SUCCESS : STATUS_ICON.FAIL;
  const title = isSuccess ? STATUS_TITLE.SUCCESS : STATUS_TITLE.FAIL;
  const description = isSuccess ? STATUS_DESCRIPTION.SUCCESS : STATUS_DESCRIPTION.FAIL;
  const button = isSuccess ? STATUS_BUTTON.SUCCESS : STATUS_BUTTON.FAIL;

  const handleButtonClick = () => {
    if (isSuccess) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={css.root}>
      <SimpleHeader />
      <main className={css.main}>
        <div className={css.circle}>
          <Icon
            className={classNames(css.icon, {
              [css.iconTypeSuccess]: isSuccess,
              [css.iconTypeFail]: !isSuccess,
            })}
          />
        </div>

        <h1
          className={classNames(css.title, {
            [css.titleTypeSuccess]: isSuccess,
            [css.titleTypeFail]: !isSuccess,
          })}
        >
          {title}
        </h1>

        <p
          className={classNames(css.description, {
            [css.descriptionTypeSuccess]: isSuccess,
            [css.descriptionTypeFail]: !isSuccess,
          })}
        >
          {description}
        </p>

        <button
          type='button'
          className={css.button}
          onClick={handleButtonClick}
        >
          <ArrowIcon
            className={css.arrow}
            width='20'
            height='20'
          />
          {button}
        </button>
      </main>
      <Copyright />
    </div>
  );
};
