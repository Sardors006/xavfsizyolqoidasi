const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/rules', require('./routes/rules'));
app.use('/api/scenarios', require('./routes/scenarios'));
app.use('/api/test', require('./routes/test'));
app.use('/api/challenge', require('./routes/challenge'));
app.use('/api/profile', require('./routes/profile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
