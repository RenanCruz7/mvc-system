export class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export class NotFoundError extends AppError{
    constructor(message: string){
        super(message, 404)
    }
}

export class ValidationError extends AppError{
    constructor(message: string){
        super(message, 400)
    }
}

export class ForbiddenError extends AppError{
    constructor(message: string){
        super(message, 403)
    }
}

export class UnauthorizedError extends AppError{
    constructor(message: string){
        super(message, 401)
    }
}
