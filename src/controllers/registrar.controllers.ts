import { Request, Response } from "express";
import { RegisterService } from "../service/register.service";

export class RegistrarController {

    private service: RegisterService

    constructor() {

        this.service = new RegisterService();
    }

    public async registrar(req: Request, res: Response) {





    }

}