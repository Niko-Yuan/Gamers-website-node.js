const express = require("express");
const cors = require("cors");
// const path = require('path');

const app = express();

var corsOptions = {
  origin: ["http://localhost:8081", "http://localhost:8080", "https://gamers-nkbr.onrender.com", "http://localhost:4173"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// Middleware function to log all incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next(); // Continue to the next middleware or route handler
});

app.get("/testWelcome", (req, res) => {
  res.json({ message: "Welcome to Fangqi Yuan application." });
});

app.get('/home', (req, res) => {
  // Handle the request for the /home route
  res.send('Welcome to the home page');
});

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'dist')));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});