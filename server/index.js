const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const router = require("./routes")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/",router);

mongoose.connect("mongodb+srv://admin:admin@cluster0.cm8qge0.mongodb.net/login?retryWrites=true&w=majority")

.then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
