const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
import routes from "./routes";

const app = express();
const port = 3002;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app routes
routes(app);

// HTTP logger
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
