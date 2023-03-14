Простий node.js (неофіційний)модуль для розрахунку курсу валют за допомогою API НБУ (https://bank.gov.ua/ua/open-data/api-dev)

## Встановлення

```bash
npm install nbu-currency
```

## Використання

```javascript
import nbuCurrency from 'nbu-currency';

nbuCurrency.exchangeCurrency(100, 'USD', 'UAH')
  .then((result) => {
    console.log(result); // 100 USD in UAH
  })
  .catch((error) => {
    console.log(error);
  });
```

