const mysql=require("mysql");

 // in case of production use the commented line below
module.exports.db_handler= mysql.createConnection(String(process.env.DB_url));  
 

