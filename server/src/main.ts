require('dotenv').config();
import express from 'express';
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;
 
app.get("/", function (req, res) {
  res.send("Hello World");
});
 
app.listen(port, () => {
  console.log(`App listening 👍 on port ${port}`);
});
