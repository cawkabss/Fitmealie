import classNames from 'classnames';

import { Package as PackageType } from 'types/interfaces/Package';

import { getPackageCurrencySymbol, getPackageDurationLabel, getPackagePriceWithDiscount } from 'utils/package';

import css from './Package.module.sass';

interface Props {
  pack: PackageType,
  isActive: boolean,
  onClick: () => void,
}

export const Package = ({
  pack,
  isActive,
  onClick,
}: Props) => {
  const priceWithDiscount = getPackagePriceWithDiscount(pack);
  const currency = getPackageCurrencySymbol(pack);
  const duration = getPackageDurationLabel(pack);

  return (
    <button
      type='button'
      className={classNames(css.root, {
        [css.rootStateActive]: isActive,
      })}
      onClick={onClick}
    >
      <span className={css.radio} />

      <p className={css.info}>
        {!!pack.discount && (
          <span className={css.label}>
            SAVE {pack.discount}%
          </span>
        )}
        <span className={css.title}>
          {pack.name}
        </span>
        <span className={css.description}>
          {pack.description}
        </span>
      </p>
      <p className={css.price}>
        <span>
          {currency}{priceWithDiscount}<span className={css.period}>/{duration}</span>
        </span>
        {!!pack.discount && (
          <span className={css.oldPrice}>
            then {currency}{pack.price}<span className={css.period}>/{duration}</span>
          </span>
        )}
      </p>
    </button>
  );
};
