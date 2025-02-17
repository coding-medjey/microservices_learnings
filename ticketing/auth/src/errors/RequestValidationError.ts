import { ValidationError } from "express-validator";


export class RequestValidationError extends Error {
    constructor(private erros: ValidationError[]) {
        super()

        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
}