const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRouter = require('./routes/url');

const app = express();

const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(() => {
  console.log("Connected to database");
}); 

app.use(express.json());

app.use("/url", urlRouter)

app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params.shortId;
  const entry = await URL.findOneAndUpdate({ shortId });
  if (!url) {
    res.status(404).json({ error: 'URL not found' });
    return;
  }
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});