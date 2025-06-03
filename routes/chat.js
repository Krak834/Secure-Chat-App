const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const message = req.body.message;
  const username = req.user?.username;  // username récupéré du token JWT

  if (!message) {
    return res.status(400).json({ error: 'Message manquant' });
  }

  res.json({
    status: 'Message reçu',
    username,
    message,
  });
});

module.exports = router;

