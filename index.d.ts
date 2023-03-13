declare const getCurrencyExchangeData: () => Promise<any[]>;

declare const exchangeCurrency: (
  amount: number,
  fromCurrency: string,
  toCurrency?: string,
) => Promise<number>;

declare const nbuCurrency: {
  getCurrencyExchangeData: typeof getCurrencyExchangeData;
  exchangeCurrency:  typeof exchangeCurrency;
};

export default nbuCurrency;