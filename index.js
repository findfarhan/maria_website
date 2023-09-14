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
    <h2>Hello World 34</h2>
    <p>The four different types of paraese fourdsdqsdwdqwdwqdwqdwdw types allow you to write pm2 delete</p>
  </body>
</html>`
  );
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
