const express = require('express');
const app = express();
const port = 3000;

app.get('/customerOnboarding', (req, res) => {
  const name = req.query.name;
  const uppercaseName = eval('"' + name + '"' + '.toUpperCase()');
  res.send('Hi there, ' + uppercaseName);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
