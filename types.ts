
export enum Variation {
  DARK_MODERN = 'DARK_MODERN',
  CLEAN_LIGHT = 'CLEAN_LIGHT',
  HIGH_URGENCY = 'HIGH_URGENCY'
}

export interface Benefit {
  text: string;
}

export interface Bonus {
  title: string;
  price: string;
}

export interface PageData {
  title: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
  ctaText: string;
  alertText: string;
  benefits: string[];
  bonusList: Bonus[];
  guaranteeDays: number;
  checkoutUrl: string;
}
