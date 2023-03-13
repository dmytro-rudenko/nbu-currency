Простий node.js (неофіційний)модуль для розрахунку курсу валют за допомогою API НБУ (https://bank.gov.ua/ua/open-data/api-dev)

## Встановлення

```bash
npm install nbu-currency
```

## Використання

```javascript
const { exchangeCurrency } = require('nbu-currency');

exchangeCurrency(100, 'USD', 'UAH')
  .then((result) => {
    console.log(result); // 100 USD in UAH
  })
  .catch((error) => {
    console.log(error);
  });
```

