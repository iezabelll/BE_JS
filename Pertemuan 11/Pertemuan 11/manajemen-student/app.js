// app.js
const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
