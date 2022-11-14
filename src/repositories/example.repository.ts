import { appDataSource } from "../data-soucer"
import { User } from "../models/user.model"




const dataSourceRepository = appDataSource.getRepository(User)
export class ExampleRepository {


    public async encotrarUsuarioporEmail(email: string) {

        const emailDoUsuario = await dataSourceRepository.findOneBy({

            email: email

        })
        return emailDoUsuario
    }



    public salvarUsuarioNoBanco({ name, email, password, caminho_da_foto, genero }: any) {
        const dadosDeTodosUsuario = dataSourceRepository.create({ name, email, password, caminho_da_foto, genero, })
        const usuario = dataSourceRepository.save(dadosDeTodosUsuario)


        return usuario
    }





}







