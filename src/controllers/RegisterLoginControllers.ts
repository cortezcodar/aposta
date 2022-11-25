import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { RegisterLoginService } from "../service/registerLoginService";



export class RegisterLoginController {


    private repository: UserRepository
    private service: RegisterLoginService

    constructor() {

        this.service = new RegisterLoginService();
    }

    public async registrar(req: Request, res: Response) {

        const { password, password_confirma, name, email, genero, caminho_da_foto, } = req.body



        if (!name) {
            return res.status(400).json({ msg: 'Nome obrigatorio!' })
        }

        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }


        if (!genero) {
            return res.status(400).json({ msg: 'Genero Obrigatorio!' })

        }
        if (/^(?=.*[A-Z])(?=.*[a-z]).{7,9}$/.test(genero) == false) {

            return res.status(400).json({
                msg: 'genero Deve conter mais que 7 caractere, uma letra maiuscula'
            })

        }




        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })


        }

        if (/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{7,15}$/.test(password) == false) {

            return res.status(400).json({
                msg: 'A senha Deve conter mais que 7 caracteres, um numero, uma letra maiuscula e um simbolo'
            })

        }


        if (password !== password_confirma) {
            return res.status(400).json({ msg: 'A senhas nao confere!!' })


        }

        try {

            await this.repository.encotrarUsuarioporEmail(email)


        } catch (error) {
            return res.status(404).json({ msg: error.message })


        }



        const usuario = await this.service.registrarUsuario({ password, email, name, genero, caminho_da_foto })



        if (!usuario) {

            const msgJson = { msg: 'usuario Já Cadastrado com esse E-email!' }
            return res.status(404).json(msgJson)
        }


        res.status(200).json(usuario)
    }

}
















