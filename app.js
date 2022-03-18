const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Express Demo App</h1> <h4>Message: Hello World</h4>");
});

app.get("/products", (req, res) => {
  res.send([
    {
      productId: "101",
      productName: "Laptop",
      price: 100,
    },
    {
      productId: "102",
      productName: "Speaker",
      price: 600,
    },
    {
      productId: "103",
      productName: "Headset",
      price: 400,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
