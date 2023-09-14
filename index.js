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
    <h2>Hello World 34</h2>
    <p>The four different types of paragraphs are descriptive, narrative, expository, and persuasive. These four types allow you to write pm2 delete</p>
  </body>
</html>`
  );
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Application is listing on port ${PORT}`);
});
