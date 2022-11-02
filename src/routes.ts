
import { request, Request, response, Response, Router } from "express";
import { ExampleController } from "./controllers/example.controllers";





const router = Router()


const exampleController = new ExampleController()

router.post('/register', async (req: Request, res: Response) => {



    await exampleController.registrar(req, res)
})


export default router