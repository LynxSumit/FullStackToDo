class ErrorHandler extends Error{
    constructor(errMessage , statusCode){
       super(errMessage)
        this.statusCode  = statusCode || 500
    }
}

export const errorMiddleware = (err,req,res,next) =>{
    err.message = err.message || "Internal server error"
    err.statusCode = err.statusCode || 500
   return res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
}

export default ErrorHandler