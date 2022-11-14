
import { request, Request, response, Response, Router } from "express";
import { ExampleController } from "./controllers/example.controllers";
import { ExampleLoginControllers } from "./controllers/example.login.controllers";
import { AuthMiddleware } from "./middleware/example.aut";
import { ExampleLogin } from "./service/example.login";





const router = Router()


const exampleController = new ExampleController()

router.post('/registro', async (req: Request, res: Response) => {

    await exampleController.registrar(req, res)
})

router.post('/auth', AuthMiddleware, (req, res) => {
    res.json({ hello: 'world' })
});


const exampleLoginControllers = new ExampleLoginControllers()

router.post('/login', async (req: Request, res: Response) => {

    await exampleLoginControllers.authentica(req, res)
})









export default router




