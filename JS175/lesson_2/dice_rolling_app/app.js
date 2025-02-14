const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function rollDice(num) {
  return Math.ceil(Math.random() * num);
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path == '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const myURL = new URL(path, `http://localhost:${PORT}`);
    let params = myURL.searchParams;
    let rolls = params.get('rolls');
    let sides = params.get('sides');
    for (let i = 0; i < rolls; i++) {
      res.write(`You rolled a ${rollDice(sides)}\n`);
    }
    res.write(`${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

