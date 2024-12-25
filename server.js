const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
