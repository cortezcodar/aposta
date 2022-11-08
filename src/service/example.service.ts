
import { UserRepository } from "../repositories/example.repository";
export class ExampleService {

    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository();

    }


    public async registrarUsuario({ name, email, password, caminho_da_foto, genero }: any) {



        const usuario = await this.repository.salvarUsuario({ name, email, password, caminho_da_foto, genero })

        return { usuario }
    }

    public async registrarAposta({ data_aposta, valor_aposta, user_id }: any) {


        const aposta = await this.repository.salvarUsuario({ data_aposta, valor_aposta, user_id })


        return { aposta }


    }
}