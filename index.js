import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
  <html>
  <head>  
    <title>Document</title>
  </head>
  <body>
    <h2>Development Branch</h2>
    <p>This is my development branch</p>
  </body>
</html>`
  );
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
