const crypto = require('crypto');

module.exports = function(req, res, next) {
  const signature = req.headers['x-signature'];
  const payload = JSON.stringify(req.body);
  const secret = process.env.SECRET_KEY;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');

  if (signature === expectedSignature) {
    next();
  } else {
    res.status(403).json({ message: 'Signature invalide' });
  }
};

