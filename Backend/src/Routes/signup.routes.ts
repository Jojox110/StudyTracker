import {Router} from "express";
import express, {NextFunction, Request, Response} from 'express'

import {createUser, isEmailInUse} from "../Models/user.model";
import type {UserCreationAttributes} from "../Models/user.model";
import {ValidationError} from "sequelize";

const signupRouter: Router = Router()

signupRouter.put("/createUser", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {email, first_name, last_name, password} = req.body;
    const user: UserCreationAttributes = {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
    }

    try {
        console.log(user)
        await createUser(user)
        res.sendStatus(201)
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(400).send({error: error.message})
        }
        else {
            res.status(500).send({error: "An unknown error occurred."})
        }
    }
})

signupRouter.get("/isEmailInUse/:email", async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const email: string = req.params.email;
    console.log("Checkpoint one");
    const val =  await isEmailInUse(email);
    console.log(`val: ${val}`);
    res.send(val)
})

export default signupRouter;
