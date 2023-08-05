

module.exports.expressError=class expressError extends Error{
   

    constructor(message, statusCode) {
      super();
      this.message=message;
      this.statusCode = statusCode;

    }
  
}

