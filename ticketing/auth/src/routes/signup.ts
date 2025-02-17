import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/RequestValidationError";
import { DatabaseConnectionError } from "../errors/DatabaseConnectionError";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 16 })
      .withMessage("Password must be between 4 to 16 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }
    console.log("Creating the User.....");
    throw new DatabaseConnectionError()
    res.status(200).send({});
  }
);

export { router as signupRouter };
