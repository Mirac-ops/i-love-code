const meineMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ); 
    next();
  };
  console.log ('bin in der middleware')
  module.exports = meineMiddleware;