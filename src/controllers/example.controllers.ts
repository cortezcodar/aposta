import { Request, Response } from "express";
import { ExampleService } from "../service/example.service";

export class ExampleController {

    private service: ExampleService

    constructor() {

        this.service = new ExampleService();
    }

    public async registrar(req: Request, res: Response) {





    }

}