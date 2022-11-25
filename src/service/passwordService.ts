

import { UserRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt"




export class PasswordService {
    private repository: UserRepository
    constructor() {

        this.repository = new UserRepository

    }


    public hashPassword(passwordStr: string) {

        return bcrypt.hashSync(passwordStr, bcrypt.genSaltSync(10));



    }

    public async veryPass(password: string, email: string) {

        const user = await this.repository.encotrarUsuarioporEmail(email)

        const veryPasss = await bcrypt.compare(password, user.password)

        if (!veryPasss) {
            throw new Error("Password invalid")

        }



    }






}





