
import express, { Request, Response } from 'express';
import routes from './routes';







const app = express();
app.use(express.json())
app.use(routes)

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    return res.json('Hello kevin');
});


app.listen(process.env.PORT, () => {
    console.log('servidor rodando', process.env.PORT)
})





