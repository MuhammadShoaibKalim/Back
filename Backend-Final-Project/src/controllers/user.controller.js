import asyncHandler from '../utils/asyncHandler.js';

// 
// import User from '../models/user.model.js';

//ye  method user ko registered kary ga.. 
const regUser = asyncHandler (async (req, res, next) => {
            return   res.status(200).json({
                 message: 'User registered successfully',
                 user: req.user,
                 success: true,
                   });
               
})

export default regUser;