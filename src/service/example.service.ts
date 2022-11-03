import { UserRepository } from "../repositories/example.repository";

export class ExampleService {

    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository();
    }

    public async registrarUsuario({ name, password, email }: any) {


    }
}