import {Request, Response , NextFunction } from "express"
import { AppError } from "./AppError"


export function erroHandler (err: Error, req: Request, res: Response, next: NextFunction){
    if (err instanceof AppError){
        return res.status(err.statusCode).json({
            success:false,
            message: err.message
        })
    }

    console.log("Erro inesperado", err)

    return res.status(500).json({
        success: false,
        message: "Erro interno do servidor"
    })
}
