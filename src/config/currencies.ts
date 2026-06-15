/**
 * Currency Configuration
 * Multi-currency support with locale-aware formatting
 */

export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  symbolPosition: 'before' | 'after';
  decimals: number;
  thousandSeparator: string;
  decimalSeparator: string;
}

function currency(
  code: string,
  symbol: string,
  name: string,
  decimals: number = 2,
  symbolPosition: 'before' | 'after' = 'before'
): CurrencyConfig {
  return {
    code,
    symbol,
    name,
    symbolPosition,
    decimals,
    thousandSeparator: ',',
    decimalSeparator: '.',
  };
}

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: currency('USD', '$', 'US Dollar'),
  EUR: currency('EUR', 'EUR', 'Euro', 2, 'after'),
  GBP: currency('GBP', 'GBP', 'British Pound'),
  JPY: currency('JPY', 'JPY', 'Japanese Yen', 0),
  CNY: currency('CNY', 'CNY', 'Chinese Yuan'),
  INR: currency('INR', 'INR', 'Indian Rupee'),
  PKR: currency('PKR', 'PKR', 'Pakistani Rupee'),
  CAD: currency('CAD', 'C$', 'Canadian Dollar'),
  AUD: currency('AUD', 'A$', 'Australian Dollar'),
  AED: currency('AED', 'AED', 'United Arab Emirates Dirham', 2, 'after'),
  SAR: currency('SAR', 'SAR', 'Saudi Riyal', 2, 'after'),
  BDT: currency('BDT', 'BDT', 'Bangladeshi Taka'),
  NGN: currency('NGN', 'NGN', 'Nigerian Naira'),
  BRL: currency('BRL', 'R$', 'Brazilian Real'),
  MXN: currency('MXN', '$', 'Mexican Peso'),
  KRW: currency('KRW', 'KRW', 'South Korean Won', 0),
  CHF: currency('CHF', 'CHF', 'Swiss Franc', 2, 'after'),
  IDR: currency('IDR', 'IDR', 'Indonesian Rupiah', 0),
  TRY: currency('TRY', 'TRY', 'Turkish Lira'),
  RUB: currency('RUB', 'RUB', 'Russian Ruble', 2, 'after'),
  PLN: currency('PLN', 'PLN', 'Polish Zloty', 2, 'after'),
  NZD: currency('NZD', 'NZ$', 'New Zealand Dollar'),
  SGD: currency('SGD', 'S$', 'Singapore Dollar'),
  HKD: currency('HKD', 'HK$', 'Hong Kong Dollar'),
  SEK: currency('SEK', 'SEK', 'Swedish Krona', 2, 'after'),
  NOK: currency('NOK', 'NOK', 'Norwegian Krone', 2, 'after'),
  DKK: currency('DKK', 'DKK', 'Danish Krone', 2, 'after'),
  ZAR: currency('ZAR', 'R', 'South African Rand'),
  EGP: currency('EGP', 'EGP', 'Egyptian Pound'),
  MYR: currency('MYR', 'RM', 'Malaysian Ringgit'),
  THB: currency('THB', 'THB', 'Thai Baht'),
  PHP: currency('PHP', 'PHP', 'Philippine Peso'),
  VND: currency('VND', 'VND', 'Vietnamese Dong', 0, 'after'),
  KWD: currency('KWD', 'KWD', 'Kuwaiti Dinar', 3, 'after'),
  QAR: currency('QAR', 'QAR', 'Qatari Riyal', 2, 'after'),
  OMR: currency('OMR', 'OMR', 'Omani Rial', 3, 'after'),
  BHD: currency('BHD', 'BHD', 'Bahraini Dinar', 3, 'after'),
  ILS: currency('ILS', 'ILS', 'Israeli New Shekel'),
  ARS: currency('ARS', 'ARS', 'Argentine Peso'),
  CLP: currency('CLP', 'CLP', 'Chilean Peso', 0),
  COP: currency('COP', 'COP', 'Colombian Peso'),
  PEN: currency('PEN', 'PEN', 'Peruvian Sol'),
  UYU: currency('UYU', 'UYU', 'Uruguayan Peso'),
  CZK: currency('CZK', 'CZK', 'Czech Koruna', 2, 'after'),
  HUF: currency('HUF', 'HUF', 'Hungarian Forint', 0, 'after'),
  RON: currency('RON', 'RON', 'Romanian Leu', 2, 'after'),
  BGN: currency('BGN', 'BGN', 'Bulgarian Lev', 2, 'after'),
  ISK: currency('ISK', 'ISK', 'Icelandic Krona', 0, 'after'),
  MAD: currency('MAD', 'MAD', 'Moroccan Dirham', 2, 'after'),
  KES: currency('KES', 'KES', 'Kenyan Shilling'),
  GHS: currency('GHS', 'GHS', 'Ghanaian Cedi'),
  TZS: currency('TZS', 'TZS', 'Tanzanian Shilling'),
  UGX: currency('UGX', 'UGX', 'Ugandan Shilling', 0),
  LKR: currency('LKR', 'LKR', 'Sri Lankan Rupee'),
  NPR: currency('NPR', 'NPR', 'Nepalese Rupee'),
  DZD: currency('DZD', 'DZD', 'Algerian Dinar', 2, 'after'),
  TND: currency('TND', 'TND', 'Tunisian Dinar', 3, 'after'),
  JOD: currency('JOD', 'JOD', 'Jordanian Dinar', 3, 'after'),
  UAH: currency('UAH', 'UAH', 'Ukrainian Hryvnia', 2, 'after'),
  KZT: currency('KZT', 'KZT', 'Kazakhstani Tenge', 2, 'after'),
  FJD: currency('FJD', 'FJ$', 'Fijian Dollar'),
};

/**
 * Default currency by language
 */
export const DEFAULT_CURRENCY_BY_LANGUAGE: Record<string, string> = {
  en: 'USD',
  es: 'EUR',
  pt: 'EUR',
  fr: 'EUR',
  de: 'EUR',
  ja: 'JPY',
  zh: 'CNY',
  id: 'IDR',
  tr: 'TRY',
  ru: 'RUB',
  it: 'EUR',
  nl: 'EUR',
  pl: 'PLN',
  ko: 'KRW',
};

export const DEFAULT_CURRENCY = 'USD';

/**
 * Format currency value
 */
export function formatCurrency(
  value: number,
  currencyCode: string,
  showSymbol: boolean = true
): string {
  const currency = CURRENCIES[currencyCode] || CURRENCIES[DEFAULT_CURRENCY];

  if (!showSymbol) {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: currency.decimals,
      maximumFractionDigits: currency.decimals,
    }).format(value);
  }

  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  }).format(value);
}

/**
 * Get currency config by code
 */
export function getCurrencyConfig(code: string): CurrencyConfig {
  return CURRENCIES[code] || CURRENCIES[DEFAULT_CURRENCY];
}

/**
 * Check if currency is supported
 */
export function isSupportedCurrency(code: string): boolean {
  return code in CURRENCIES;
}

/**
 * Get default currency for language
 */
export function getDefaultCurrencyForLanguage(languageCode: string): string {
  return DEFAULT_CURRENCY_BY_LANGUAGE[languageCode] || DEFAULT_CURRENCY;
}
