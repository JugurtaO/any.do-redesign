const { db_handler } = require("../config/config");

module.exports.viewTask = async(req, res,next) => {
    const user_id = req.session.active_user_id;

    queryString = `SELECT * FROM Task WHERE user_id = '${user_id}';`;

    db_handler.query(queryString, (err, results) => {
        if (err)
            return next(err);
        // res.json(results);
        let tasks=(results);
        
        res.render('task',{tasks});
    })

}