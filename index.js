import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2>Hello World</h2>
  </body>
</html>`
  );
});

const PORT = 8003;
app.listen(PORT, () => {
  console.log(`Application is listing on port ${PORT}`);
});
