
import { UserRepository } from "../repositories/userRepository";
import { PasswordService } from "./passwordService";
export class RegisterLoginService {


    private repository: UserRepository;
    private passwordService: PasswordService;

    constructor() {
        this.passwordService = new PasswordService();

        this.repository = new UserRepository();

    }

    public async registrarUsuario({ name, email, password, caminho_da_foto, genero }: any) {

        const userExists = await this.repository.encotrarUsuarioporEmail(email)

        if (userExists) {
            throw new Error("usuario ja existe");

        }

        const passwordHash = this.passwordService.hashPassword(password)





        const usuario = await this.repository.salvarUsuarioNoBanco({ name, email, password: passwordHash, caminho_da_foto, genero })

        return { usuario }
    }




}








