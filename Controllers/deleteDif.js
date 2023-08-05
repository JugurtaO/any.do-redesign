const { db_handler } = require("../config/config");

module.exports.deleteDif = (req, res,next) => {

    const { task_id } = req.params;

    //get task_body and user_id in order to insert task into trash before removing it from Task table
    query = `DELETE FROM Trash WHERE Task_ID = ${task_id};`;

    db_handler.query(query, (err, results) => {
        if (err)
            console.log("Error playload is set to: " + err.message);
       
      
        req.flash("success","Task difinitely deleted");
        res.redirect("/trash");

    })









}