const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;

function getLoanInformation(params) {
  let amount = parseInt(params.get('amount'), 10);
  let duration = parseInt(params.get('duration'), 10);
  let apr = .05;
  let monthlyPayment = calculateMontlyPayment(apr, duration * 12, amount);
  return `<tr><th>Amount:</th><td>$${amount}</td></tr>
          <tr><th>Duration:</th><td>${duration} years</td></tr>
          <tr><th>APR:</th><td>${apr * 100}%</td></tr>
          <tr><th>Monthly payment:</th><td>$${monthlyPayment.toFixed(2)}</td></tr>`;
}

function calculateMontlyPayment(apr, months, amount) {
  let monthlyRate = apr / 12;
  let growthFactor = (1 + monthlyRate) ** (months)
  let numerator = monthlyRate * growthFactor;
  let denominator = growthFactor - 1;

  return amount * numerator / denominator;
}

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const myURL = new URL(path, `http://localhost:${PORT}`);
  let content = HTML_START + getLoanInformation(myURL.searchParams) + HTML_END
  res.write(content);
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});
