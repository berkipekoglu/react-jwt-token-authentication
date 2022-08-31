const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//require("./db/db");

app.set("api_secret_key", require("./config").api_secret_key);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("<h1>Merhaba, JTW Token Servisi</h1>")
  });


app.use("/", require("./routers/userRouter"));
app.listen(5000, () => console.log("Yayın başladı..." + "\n" + "http://localhost:5000"))