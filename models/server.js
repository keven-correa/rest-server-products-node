import express from 'express';
import cors from 'cors';
import usersRoutes from '../routes/user.routes.js';

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();
        //routes
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        //parsing and read request body
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.status(200).json({ msg: 'REST SERVER IS ALREADY RUNNIG!!!' })
        });

        this.app.use(this.usersPath, usersRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port: ${this.port}`)
        });
    }
}