import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/RequestValidationError";
import { DatabaseConnectionError } from "../errors/DatabaseConnectionError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        console.log("Invalid email or password")
    } else if (err instanceof DatabaseConnectionError) {
        console.log(err.reason)
    }
    res.status(400).send({
        "msg": "Error occured"
    })
}