import { Request, Response } from "express";
import { ExampleService } from "../service/example.service";

export class ExampleController {

    private service: ExampleService

    constructor() {

        this.service = new ExampleService();
    }

    public async registrar(req: Request, res: Response) {

        const { password, name, email, genero, caminho_da_foto, } = req.body

        const usuario = await this.service.registrarUsuario({ password, email, name, genero, caminho_da_foto })

        res.status(200).json(usuario)
    }


    public async apostar(req: Request, res: Response) {
        const { valor_aposta, data_aposta, user_id } = req.body

        const aposta = await this.service.registrarAposta({ data_aposta, valor_aposta, user_id })

        res.status(200).json(aposta)



    }



}