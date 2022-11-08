import { appDataSource } from "../data-soucer"
import { Aposta } from "../models/aposta.model"
import { User } from "../models/user.model"

const dataSourceRepository = appDataSource.getRepository(User)
const Repository = appDataSource.getRepository(Aposta)
export class UserRepository {


    public salvarUsuario({ name, email, password, caminho_da_foto, genero }: any) {
        const dadosUsuario = dataSourceRepository.create({ name, email, password, caminho_da_foto, genero, })
        const usuario = dataSourceRepository.save(dadosUsuario)


        return usuario
    }

    public async salvarAposta({ valor_aposta, data_aposta, user_id }: any) {
        const dadosDaAposta = Repository.create({ valor_aposta, data_aposta, user_id })
        const apostasUser = Repository.save(dadosDaAposta)


        return apostasUser
    }


}