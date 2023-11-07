const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {

  const token = req.header('Authorization');
  
  if (!token) return res.status(401).json({ message: 'Authhorization Error!' });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Error!' });

    req.user = user;
    next();
  });
}

module.exports = verifyJWT ;
