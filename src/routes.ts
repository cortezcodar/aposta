
import { request, Request, response, Response, Router } from "express";
import { ExampleController } from "./controllers/example.controllers";





const router = Router()


const exampleController = new ExampleController()

router.post('/register', async (req: Request, res: Response) => {



    await exampleController.registrar(req, res)
})


router.post('/apostar', async (req: Request, res: Response) => {



    await exampleController.apostar(req, res)
})


export default router