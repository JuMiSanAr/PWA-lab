const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/version", (req, res) => {
  console.log(req.body);
  // If the input from the user the same as the current version, the cache will not be updated.
  // Otherwise, the cache will be trashed and the new one will be loaded.
  if (req.body.newVersion === req.body.currentVersion) {
    console.log("same version")
    res.status(200).json({data: req.body, update_needed: false});
  } else {
    console.log("new version")
    res.status(200).json({data: req.body, update_needed: true});
  }
  // on response, if version is different from current, trash old cache and load new one
  // before reloading, show spinner ("app is updating") and after a few seconds, reload
});

app.post("/send/message", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
