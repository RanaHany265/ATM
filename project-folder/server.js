const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname , "public", "homepage.html"));
});
app.get("/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName;
    const categoryImage = {
        stickers: "images/sticker2.jpeg",
    };
    const imageUrl = categoryImage[categoryName.toLowerCase()] || "/images/default.jpg";
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${categoryName} Items</title>
      </head>
      <body>
        <h1>Items in ${categoryName}</h1>
        <img src="${imageUrl}" alt="${categoryName}">
        <br> 
        <a href="/">Back to Home</a>
      </body>
      </html>
    `);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:4000");
});
