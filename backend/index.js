const express = require("express");
const app = express();
const dotenv = require("../node_modules/dotenv");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/error.js");

app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, "../.env") });

//dotenv.config();
const connectDB = require("./config/db.js");
//console.log(process.env.PORT);

connectDB();

//const { chats} = require('./data.js');

app.get("/", (req, res) => {
  res.send("hemlo");
});

app.use("/r/user", userRoutes);
app.use("/r/chat", chatRoutes);

app.get("/r/chat", (req, res) => {
  res.send(chats);
});

app.get("/r/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => {
    if (c._id === req.params.id) return c;
  });
});
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started");
});
