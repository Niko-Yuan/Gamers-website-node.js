const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

var corsOptions = {
  origin: ["http://localhost:8081", "https://gamers-nkbr.onrender.com"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Fangqi Yuan application." });
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});