var path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");
const mockAPIResponse = require("./mockAPI.js");

const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
const port = 3000;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/sentiment", async (req, res) => {
  //Retrieve data from api
  axios
    .get(`${baseURL}key=${process.env.API_KEY}&url=${req.body.url}&lang=en`)
    .then((response) => {
      const data = {
        model: response.data.model,
        score_tag: response.data.score_tag,
        agreement: response.data.agreement,
        subjectivity: response.data.subjectivity,
        confidence: response.data.confidence,
        irony: response.data.irony,
        sentence_count: response.data.sentence_list.length
      }
      console.log(data)
      res.send(data)
    })
    .catch((error) => {
      console.log(error);
    })
})
