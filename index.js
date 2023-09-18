import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
  <html>
  <head>  
    <title>react app</title>
  </head>
  <body>
    <h2>Main Branch</h2>
    <p>This is my main branch tucsfkkffddg</p>
  </body>
</html>`
  );
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
