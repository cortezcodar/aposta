import { ExampleRepository } from "../repositories/example.repository";
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken";

export class ExampleLogin {
    private repository: ExampleRepository

    constructor() {

        this.repository = new ExampleRepository();
    }

    public async loginUsuario({ email, password }: any) {
        const user = await this.repository.encotrarUsuarioporEmail(email)


        if (!user) {
            return ({ Error: "Usuario Não existe" })
        }





        const veryfPass = await bcrypt.compare(password, user.password)

        if (!veryfPass) {
            return ({ Error: "Password invalid" })

        }



        const token = sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_PASS, { expiresIn: "1h" })

        return token

    }



}