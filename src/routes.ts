
import { request, Request, response, Response, Router } from "express";
import { RegisterLoginController } from "./controllers/RegisterLoginControllers";
import { LoginControllers } from "./controllers/loginControllers";
import { AuthMiddleware } from "./middleware/auth";






const router = Router()


const registerLoginController = new RegisterLoginController()

router.post('/registro', async (req: Request, res: Response) => {

    await registerLoginController.registrar(req, res)
})




router.post('/auth', AuthMiddleware, (req, res) => {
    res.json({ hello: 'world' })
});

const loginControllers = new LoginControllers()

router.post('/login', async (req: Request, res: Response) => {

    await loginControllers.authentica(req, res)
})













export default router




