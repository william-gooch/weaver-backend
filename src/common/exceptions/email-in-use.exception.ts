import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "./error-codes";

export class EmailInUseException extends HttpException {
    constructor() {
        super(
            {
                message: "Email already in use.",
                code: ErrorCode.EMAIL_IN_USE,
            },
            HttpStatus.BAD_REQUEST
        );
    }
}
