

// const asyncHandler = (requestHandler) => {
//      (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => {
//             next(err);
//         });
//     };
// };


// export { asyncHandler };


// asyncHandler.js
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;



// const asynHandler = (fn) => async (req, res, next) => {
//       try {
//             await fn (req, res)
//       } catch (error) {
//            res.status( error.code || 500 ).json({
//             success:false,
//             message:error.message
//            })
//       }
// };
