import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.use(express.json());
import { exec } from 'child_process'

let list = [
    {
        name: 'Genel test',
        value: 'cypress/e2e/regression/index.cy.js'
    }
];

app.get("/", async (req, res) => {
    res.redirect('view/index.html')
});

app.get("/list", async (req, res) => {

    res.send(list.map(m => m.name));
});

let logs = [];
app.get("/run", async (req, res) => {
    // let ex = exec('cd ../ && npx cypress run  --spec=' + list[req.query.id].value);
    let ex = exec('cd ../ && npm run docker');

    ex.stdout.on('data', function (data) {
        console.log(data);
        logs.push(data);
    });
    res.redirect('view/otp.html')
});
app.get("/logs", async (req, res) => {
    res.send(logs);
});

import fs from 'fs';
app.get("/otp", async (req, res) => {

    fs.writeFileSync('./otp.txt', req.query.code);
    console.log(req.query.code);
    res.redirect('/view/log.html')
});

app.use(express.static('public'))


app.listen(2000);
console.log("started: 2000");
let r = { app };
export default r;