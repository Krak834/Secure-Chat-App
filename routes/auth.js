const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const USERS = {
  alice: 'password123',
  bob: 'mypassword'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || USERS[username] !== password) {
    return res.status(401).json({ error: 'Identifiants invalides' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
