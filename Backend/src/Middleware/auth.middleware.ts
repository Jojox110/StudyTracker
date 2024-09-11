import {NextFunction, Request, Response} from "express";

export function ensureAuthentication(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.status(401).json({message: "User is not authenticated"})
    }
}