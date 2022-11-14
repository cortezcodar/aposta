
import { Request, Response } from "express";
import { ExampleLogin } from "../service/example.login";


export class ExampleLoginControllers {

    private service: ExampleLogin

    constructor() {

        this.service = new ExampleLogin();
    }


    public async authentica(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }

        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })


        }


        const token = await this.service.loginUsuario({ email, password })


        res.status(200).json(token)









    }

}