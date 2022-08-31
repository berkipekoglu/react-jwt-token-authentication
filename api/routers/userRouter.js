const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//const userModel = require('../models/user');

router.get("/getToken", (request, response, next) => {
  console.log(request.query)
  const { name } = request.query
  //response.send(`Name : ${name} - Surname: ${surName}`);
  Promise.resolve()
    .then(() => {
      const token = jwt.sign({}, request.app.get("api_secret_key"), {
        expiresIn: 120,
      });
      response.json({
        name,
        status: true,
        token,
      });
    })
    .catch((err) => console.log(err));
});

// router.get("/getToken", (request, response, next) => {
//     response.send("<h1>Selam</h1>");

// })

module.exports = router;
