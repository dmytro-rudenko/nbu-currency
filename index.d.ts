interface Currency {
  txt: string;
  rate: number;
  cc: string;
}

declare const foundCurrency: (currency: string) => (item: Currency) => boolean;

declare const getCurrencyExchangeData: () => Promise<Currency[]>;

declare const exchangeCurrency: (
  amount: number,
  fromCurrency: string,
  toCurrency?: string,
) => Promise<number>;

export default {
  exchangeCurrency,
  getCurrencyExchangeData,
};

export {
  getCurrencyExchangeData,
  exchangeCurrency,
};