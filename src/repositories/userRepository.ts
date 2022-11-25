import { appDataSource } from "../data-soucer"
import { User } from "../models/user.model"




const dataSourceRepository = appDataSource.getRepository(User)
export class UserRepository {


    public async encotrarUsuarioporEmail(email: string) {

        const usuario = await dataSourceRepository.findOneBy({

            email: email

        })
        return usuario
    }



    public salvarUsuarioNoBanco({ name, email, password, caminho_da_foto, genero }: any) {
        const dadosDeTodosUsuario = dataSourceRepository.create({ name, email, password, caminho_da_foto, genero, })

        return dataSourceRepository.save(dadosDeTodosUsuario)
    }





}







