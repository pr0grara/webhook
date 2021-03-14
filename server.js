require('dotenv/config');
import { Sequelize } from "sequelize";
import express from 'express';
import routes from './client/routes/typeform.js'
import { createHook } from './client/routes/util/typeform';
const app = express();
const port = process.env.PORT || 9000;

const db = new Sequelize(process.env.PG_CONN_STRING);
try {
    db.authenticate()
        .then(console.log("succesfully connected to db"));
} catch {
    console.log("db connection failed")
}

app.use(express.json());

routes(app);

app.get('/hook', (req, res) => {
    createHook("AhCdegfT", req.body)
    .then(res => {
        console.log(res)
    })
    console.log("AhCdegfT", req.body);
    res.status(200).end();
});

app.get('/', (req, res) => {
    console.log(':)');
    console.log(req);
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    console.log(req.body);
    res.status(200).end();
});

app.use('/', (req, res, next) => {
    res.status(404);
    if (req.accepts('json')) {
        res.send({error: true, message: 'Route Not Found'});
        return;
    }
})

app.listen(port, () => console.log(`App running on port ${port}`));