import { UserRepository } from "../repositories/userRepository";
import { sign } from "jsonwebtoken";
import { PasswordService } from "./passwordService";

export class loginService {
    private repository: UserRepository
    private passwordService: PasswordService;



    constructor() {



        this.repository = new UserRepository();
        this.passwordService = new PasswordService();
    }

    public async loginUsuario({ email, password }: any) {
        const user = await this.repository.encotrarUsuarioporEmail(email)


        if (!user) {
            throw new Error("Usuario Não existe");

        }





        await this.passwordService.veryPass(password, user.password)




        const token = sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_PASS, { expiresIn: "1h" })

        return token

    }





}