
import { ExampleRepository } from "../repositories/example.repository";
import bcrypt from "bcrypt"
export class ExampleRegister {


    private repository: ExampleRepository;

    constructor() {

        this.repository = new ExampleRepository();

    }

    public async registrarUsuario({ name, email, password, caminho_da_foto, genero }: any) {

        const userExists = await this.repository.encotrarUsuarioporEmail(email)

        if (userExists) {
            return null
        }

        const salt = bcrypt.genSaltSync(10)

        const passwordHash = bcrypt.hashSync(password, salt)

        const usuario = await this.repository.salvarUsuarioNoBanco({ name, email, password: passwordHash, caminho_da_foto, genero })

        return { usuario }
    }




}








