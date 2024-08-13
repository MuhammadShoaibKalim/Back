// import {Route, Router} from "express"
// import {regUser} from "../controllers/user.controller.js";

// const router = Router();

// router.route("/register")
//     .post(asyncHandler(regUser));

// export default router; 


 





// user.router.js
import { Router } from "express";
import { regUser } from "../controllers/user.controller.js";
import asyncHandler from '../utils/asyncHandler.js';

const router = Router();

router.route("/register")
    .post(asyncHandler(regUser));

export default router;
