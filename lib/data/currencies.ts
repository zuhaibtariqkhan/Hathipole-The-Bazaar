import { CurrencyConfig, CurrencyCode } from '../types';

export const currencyList: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', rateAgainstUSD: 1, label: 'USD ($)' },
  { code: 'EUR', symbol: '€', rateAgainstUSD: 0.92, label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', rateAgainstUSD: 0.79, label: 'GBP (£)' },
  { code: 'AED', symbol: 'AED ', rateAgainstUSD: 3.67, label: 'AED (د.إ)' },
  { code: 'INR', symbol: '₹', rateAgainstUSD: 83.5, label: 'INR (₹)' },
  { code: 'AUD', symbol: 'A$', rateAgainstUSD: 1.52, label: 'AUD ($)' },
  { code: 'CAD', symbol: 'C$', rateAgainstUSD: 1.36, label: 'CAD ($)' },
  { code: 'JPY', symbol: '¥', rateAgainstUSD: 154.0, label: 'JPY (¥)' }
];

export function formatPrice(priceInUSD: number, targetCurrency: CurrencyCode = 'USD'): string {
  const config = currencyList.find((c) => c.code === targetCurrency) || currencyList[0];
  const converted = priceInUSD * config.rateAgainstUSD;
  
  if (targetCurrency === 'INR' || targetCurrency === 'JPY') {
    return `${config.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }
  return `${config.symbol}${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}
