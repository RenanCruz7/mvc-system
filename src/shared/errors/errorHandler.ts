import {Request, Response , NextFunction } from "express"
import { AppError } from "./AppError"

export const asyncHandler = (fn: Function) =>{
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    }
}


export function erroHandler (err: Error, req: Request, res: Response, next: NextFunction){
    if (err instanceof AppError){
        return res.status(err.statusCode).json({
            success:false,
            message: err.message
        })
    }

    console.log("Unexpected error:", err)

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
