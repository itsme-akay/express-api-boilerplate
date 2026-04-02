const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

router.get('/health', (req, res) => {
  res.json({ success: true, message: 'API is running' });
});

router.use('/users', userRoutes);

module.exports = router;
