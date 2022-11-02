import { UserRepository } from "../repositories/user.repository";

export class RegisterService {

    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository();
    }

    public async registrarUsuario({ name, password, email }: any) {


    }
}