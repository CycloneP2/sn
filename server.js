const express = require('express');
const cors = require('cors');
const path = require('path');

const verifyHandler = require('./api/verify');
const registerHandler = require('./api/register');
const reportHandler = require('./api/report');
const historyHandler = require('./api/history');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.all('/api/verify', verifyHandler);
app.all('/api/register', registerHandler);
app.all('/api/report', reportHandler);
app.all('/api/history', historyHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`pH Activator Portal server running at http://localhost:${PORT}`);
});
