const { db_handler } = require("../config/config");

module.exports.editTask = (req, res, next) => {

    const { task_body } = req.body;
    const { task_id } = req.params;

    queryString = `UPDATE Task SET Task_Body = '${task_body}' WHERE Task_ID = ${task_id} ;`;

    db_handler.query(queryString, (err) => {
        if (err)
            return next(err);
        req.flash("success", "Task edited successfully");
        return res.redirect("/allTasks");


    })

}