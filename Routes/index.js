const express = require('express');
const router = express.Router();

const taskControllers=require("../Controllers/index");
const {sanitize}=require("../middlewares/sanitization/sanitize");
const {checkAuthorization}=require("../middlewares/auth/checkAuthorization");
const {checkLogin}=require("../middlewares/auth/checkLogin");

import {catchAsync} from '../../utils/catchAsync';



router.get('/',sanitize,taskControllers.renderHome);
router.get('/home',sanitize,taskControllers.renderHome);
router.get('/allTasks',sanitize,checkLogin,catchAsync(taskControllers.viewTask));
router.get('/about',sanitize,taskControllers.renderAbout);
router.get('/trash',sanitize,checkLogin,catchAsync(taskControllers.renderTrash));
router.get('/users/login',sanitize,taskControllers.renderLogin);
router.get('/users/signup',sanitize,taskControllers.renderSignup);
router.get('/users/signout',sanitize,taskControllers.renderSignout);
router.get('/tasks/:task_id/editPage',sanitize,checkLogin,taskControllers.viewEditPage);

router.post("/tasks/add", sanitize,checkLogin,catchAsync(taskControllers.addTask));
router.post("/tasks/:task_id/restore", sanitize,checkLogin,catchAsync(taskControllers.restoreTask));
router.post("/tasks/:task_id/edit", sanitize,checkLogin,catchAsync(taskControllers.editTask));
router.post("/tasks/:task_id/delete",sanitize, checkLogin,catchAsync(taskControllers.deleteTask));
router.post("/tasks/:task_id/deleteDif",sanitize, checkLogin,catchAsync(taskControllers.deleteDif));


router.post("/users/signup",sanitize,catchAsync(taskControllers.signup));
router.post("/users/login",sanitize, catchAsync(taskControllers.login));
router.post("/users/logout",sanitize,catchAsync(taskControllers.logout));
router.post("/users/signout",catchAsync(sanitize,taskControllers.signout));



module.exports.router = router;
