const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // You can change this port if needed

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to any path by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
