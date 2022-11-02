
import { request, Request, response, Response, Router } from "express";
import { RegistrarController } from "./controllers/registrar.controllers";





const router = Router()


const registrarController = new RegistrarController()

router.post('/register', async (req: Request, res: Response) => {



    await registrarController.registrar(req, res)
})


export default router