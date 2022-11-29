import { PackageCurrency } from 'types/enums/PackageCurrency';
import { PackageDuration } from 'types/enums/PackageDuration';
import { Package } from 'types/interfaces/Package';

const CURRENCY_SYMBOLS = {
  [PackageCurrency.USD]: '$',
};

const DURATION_LABELS = {
  [PackageDuration.Day]: 'day',
  [PackageDuration.Month]: 'mo',
  [PackageDuration.Quarter]: 'qr',
};

export const getPackageCurrencySymbol = (pack: Package) => {
  return CURRENCY_SYMBOLS[pack.currency] || 'unknown';
};

export const getPackageDurationLabel = (pack: Package) => {
  return DURATION_LABELS[pack.duration] || 'unknown';
};

export const getPackagePriceWithDiscount = (pack: Package) => {
  if (!pack.discount) {
    return pack.price;
  }

  return (pack.price - pack.price * (pack.discount * 0.01)).toFixed(2);
};
