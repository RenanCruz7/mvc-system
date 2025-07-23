import { Response } from "express";

export function responseSucess(res: Response,data: any ,message = 'Sucess', status = 200){
    return res.status(status).json({
        success: true,
        message,
        data
    });
}