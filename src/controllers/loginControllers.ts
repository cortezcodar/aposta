
import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { loginService } from "../service/loginService";
import bcrypt from 'bcrypt'
import { PasswordService } from "../service/passwordService";


export class LoginControllers {

    private service: loginService
    private repository: UserRepository
    private servicee: PasswordService

    constructor() {

        this.repository = new UserRepository();
        this.service = new loginService();
        this.servicee = new PasswordService();
    }


    public async authentica(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email) {
            return res.status(400).json({ msg: 'E-email Obrigatorio!' })

        }

        if (!password) {
            return res.status(400).json({ msg: 'senha obrigatória!' })


        }

        try {
            const user = await this.repository.encotrarUsuarioporEmail(email)
            await this.servicee.veryPass(password, user.password)
        } catch (error) {
            res.status(404).json({ msg: error.message })
        }



        const token = await this.service.loginUsuario({ email, password })


        res.status(200).json(token)









    }

}