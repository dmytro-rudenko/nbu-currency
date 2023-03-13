import axios from 'axios'

const CURRENCY_EXCHANGE_DATA_URL =
	'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
const DEFAULT_CURRENCY = 'USD'
const UAH_CURRENCY = {
	txt: 'Українська гривня',
	rate: 1,
	cc: 'UAH',
}

const foundCurrency = (currency) => (item) => item.cc === currency

const getCurrencyExchangeData = async () => {
	const { data } = await axios.get(CURRENCY_EXCHANGE_DATA_URL)
	return data
}

const exchangeCurrency = async (
	amount,
	fromCurrency,
	toCurrency = DEFAULT_CURRENCY
) => {
	if (!amount || !fromCurrency || !toCurrency) {
		return 0
	}

	if (fromCurrency === toCurrency) {
		return amount
	}

	const currencyExchangeData = await getCurrencyExchangeData()

	currencyExchangeData.push(UAH_CURRENCY)

	const fromCurrencyData = currencyExchangeData.find(
		foundCurrency(fromCurrency)
	)
	const toCurrencyData = currencyExchangeData.find(foundCurrency(toCurrency))

	if (!fromCurrencyData || !toCurrencyData) {
		return 0
	}

	const inFromCurrencySum = amount * fromCurrencyData.rate
	const inToCurrencySum = inFromCurrencySum / toCurrencyData.rate

	return +inToCurrencySum.toFixed(2)
}

export default {
	exchangeCurrency,
	getCurrencyExchangeData,
}
