const { constant } = require("../controllers/constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch(statusCode){
    case constant.VALIDATION_ERROR: 
        res.json({title: "Validation Found", message : err.message, stackTrace : err.stack});
        break

    case constant.NOT_FOUND:
        res.json({title: "Not Found", message : err.message, stackTrace : err.stack});

    case constant.FORBIDDEN:
            res.json({title: "FORBIDDEN", message : err.message, stackTrace : err.stack});
            
    case constant.UNAUTHORIZED:
        res.json({title: "UNAUTHORIZED", message : err.message, stackTrace : err.stack});

    case constant.SERVER_ERROR:
        res.json({title: "SERVER ERROR", message : err.message, stackTrace : err.stack});
    
    default:
        console.log("No Error Found, All Good !");
        break;

  }

};

module.exports = errorHandler