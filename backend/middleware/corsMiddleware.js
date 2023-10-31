// const meineMiddleware = (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); 
    
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     ); 
//     next();
//   };
//   console.log ('bin in der middleware')
//   module.exports = meineMiddleware;



const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

  const token = req.header('Authorization');
  
  if (!token) return res.status(401).json({ message: 'Authentifizierung fehlgeschlagen' });

  jwt.verify(token, 'geheimesToken', (err, user) => {
    if (err) return res.status(403).json({ message: 'Ungültiges Token' });

    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
