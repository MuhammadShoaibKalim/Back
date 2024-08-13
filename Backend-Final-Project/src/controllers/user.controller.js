// import asyncHandler from '../utils/asyncHandler.js';

// // import User from '../models/user.model.js';

// //ye  method user ko registered kary ga.. 
// const regUser = asyncHandler (async (req, res, next) => {
//             return  res.status(200).json({
//                  message: 'User registered successfully',
//                 //  user: req.user,
//                 //  success: true,
//                    });
                
// })


// export default regUser;


// user.controller.js
import asyncHandler from '../utils/asyncHandler.js';

// This method will register the user
export const regUser = asyncHandler(async (req, res, next) => {
    // Placeholder for user registration logic
    // You can add your database logic here to save the user details
    
    return res.status(200).json({
        message: 'User registered successfully',
        // user: req.user, // Include this if you have a user object
        // success: true, // Include this if you need to indicate success
    });
});
  