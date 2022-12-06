import { PackageCurrency } from 'types/enums/PackageCurrency';
import { PackageDuration } from 'types/enums/PackageDuration';

export interface Package {
  id: number,
  name: string,
  description: string,
  price: number,
  recPrice: number,
  currency: PackageCurrency,
  duration: PackageDuration,
  duration_int: number,
  discount: number,
  default?: boolean,
  trial?: boolean,
}
