const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
const yahooFinance = require('yahoo-finance')

app.get('/stock_data/:ticker', (req, res) => {
  const today = new Date()
  let from = `${today.getFullYear() - 1}-${today.getMonth()}-${today.getDay()}`
  let to = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}` 

  yahooFinance.historical({ 
    symbol: req.params.ticker,
    from: from,
    to: to,
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, (err, success) => {
    if(err != null) {
      return res.status(400).send({ error: err })
    }

    return res.status(200).send(success)
  });
})

console.log('listening on port 5000')
app.listen(5000);

