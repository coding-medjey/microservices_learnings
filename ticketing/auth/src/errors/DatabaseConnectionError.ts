export class DatabaseConnectionError extends Error {
    reason = "Error Occurs while connecting to the database"
    constructor() {
        super()
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}