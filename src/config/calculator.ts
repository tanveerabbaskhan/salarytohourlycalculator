/**
 * Calculator Configuration
 * Constants and formulas for salary conversion
 */

export const CALCULATOR_CONFIG = {
  // Standard work year assumptions
  WEEKS_PER_YEAR: 52,
  MONTHS_PER_YEAR: 12,
  DAYS_PER_WEEK: 5,
  MINUTES_PER_HOUR: 60,
  SECONDS_PER_MINUTE: 60,
  SECONDS_PER_HOUR: 3600,
  
  // Default values
  DEFAULT_HOURS_PER_WEEK: 40,
  
  // Rounding precision
  DECIMAL_PLACES: 2,
  
  // Input constraints
  MIN_VALUE: 0,
  MAX_VALUE: 999999999,
  MIN_HOURS_PER_WEEK: 1,
  MAX_HOURS_PER_WEEK: 168, // 24 hours * 7 days
};

/**
 * Wage type definitions
 */
export enum WageType {
  HOURLY = 'hourly',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
  MONTHLY = 'monthly',
  ANNUAL = 'annual',
  PER_MINUTE = 'perMinute',
  PER_SECOND = 'perSecond',
}

/**
 * Conversion formulas (all convert TO hourly wage)
 */
export const CONVERSION_FORMULAS = {
  // [wageType] -> hourly
  [WageType.HOURLY]: (hourly: number) => hourly,
  
  [WageType.DAILY]: (daily: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    daily / (hoursPerWeek / CALCULATOR_CONFIG.DAYS_PER_WEEK),
  
  [WageType.WEEKLY]: (weekly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    weekly / hoursPerWeek,
  
  [WageType.BIWEEKLY]: (biweekly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    biweekly / (hoursPerWeek * 2),
  
  [WageType.MONTHLY]: (monthly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    (monthly * CALCULATOR_CONFIG.MONTHS_PER_YEAR) /
    (hoursPerWeek * CALCULATOR_CONFIG.WEEKS_PER_YEAR),
  
  [WageType.ANNUAL]: (annual: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    annual / (hoursPerWeek * CALCULATOR_CONFIG.WEEKS_PER_YEAR),
  
  [WageType.PER_MINUTE]: (perMinute: number) =>
    perMinute * CALCULATOR_CONFIG.MINUTES_PER_HOUR,
  
  [WageType.PER_SECOND]: (perSecond: number) =>
    perSecond * CALCULATOR_CONFIG.SECONDS_PER_HOUR,
};

/**
 * Inverse formulas (hourly -> other types)
 */
export const INVERSE_FORMULAS = {
  [WageType.HOURLY]: (hourly: number) => hourly,
  
  [WageType.DAILY]: (hourly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    hourly * (hoursPerWeek / CALCULATOR_CONFIG.DAYS_PER_WEEK),
  
  [WageType.WEEKLY]: (hourly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    hourly * hoursPerWeek,
  
  [WageType.BIWEEKLY]: (hourly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    hourly * hoursPerWeek * 2,
  
  [WageType.MONTHLY]: (hourly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    (hourly * hoursPerWeek * CALCULATOR_CONFIG.WEEKS_PER_YEAR) /
    CALCULATOR_CONFIG.MONTHS_PER_YEAR,
  
  [WageType.ANNUAL]: (hourly: number, hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK) =>
    hourly * hoursPerWeek * CALCULATOR_CONFIG.WEEKS_PER_YEAR,
  
  [WageType.PER_MINUTE]: (hourly: number) =>
    hourly / CALCULATOR_CONFIG.MINUTES_PER_HOUR,
  
  [WageType.PER_SECOND]: (hourly: number) =>
    hourly / CALCULATOR_CONFIG.SECONDS_PER_HOUR,
};

/**
 * Convert from any wage type to hourly
 */
export function convertToHourly(
  value: number,
  fromType: WageType,
  hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK
): number {
  const formula = CONVERSION_FORMULAS[fromType];
  if (!formula) return 0;
  
  const result = formula(value, hoursPerWeek);
  return parseFloat(result.toFixed(CALCULATOR_CONFIG.DECIMAL_PLACES));
}

/**
 * Convert from hourly to any wage type
 */
export function convertFromHourly(
  hourly: number,
  toType: WageType,
  hoursPerWeek: number = CALCULATOR_CONFIG.DEFAULT_HOURS_PER_WEEK
): number {
  const formula = INVERSE_FORMULAS[toType];
  if (!formula) return 0;
  
  const result = formula(hourly, hoursPerWeek);
  return parseFloat(result.toFixed(CALCULATOR_CONFIG.DECIMAL_PLACES));
}

/**
 * Get label for wage type
 */
export function getWageTypeLabel(wageType: WageType, language: string = 'en'): string {
  const labels: Record<string, Record<WageType, string>> = {
    en: {
      [WageType.HOURLY]: 'Hourly',
      [WageType.DAILY]: 'Daily',
      [WageType.WEEKLY]: 'Weekly',
      [WageType.BIWEEKLY]: 'Biweekly',
      [WageType.MONTHLY]: 'Monthly',
      [WageType.ANNUAL]: 'Annual',
      [WageType.PER_MINUTE]: 'Per Minute',
      [WageType.PER_SECOND]: 'Per Second',
    },
  };
  
  return labels[language]?.[wageType] || labels['en'][wageType];
}
