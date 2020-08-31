let express = require("express");
let app = express();
app.get("/", function (req, res) {
  res.send("hi sir");
});

app.get("/bye", function (req, res) {
  res.send("bye sir");
});

app.get("/this/:nameofthing", function (req, res) {
  let place = req.params.nameofthing;
  res.send(
    "wow a pattern in the url that follows /this/aNyThiNg, where aNyThiNg right now is: " +
      place
  );
});

app.get("*", function (req, res) {
  res.send("this isn't a page but hi again");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
