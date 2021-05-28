const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(fileUpload());
app.post("/", (req, res) => {
  let uploadPath;
  const filename = Date.now() + req.files.video.name;
  const file = req.files.video;
  uploadPath = __dirname + "/uploads/" + filename;
  file.mv(uploadPath, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Uploaded");
    }
  });
});

app.listen(4000, () => {
  console.log("listening on *:4001");
});
