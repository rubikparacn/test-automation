import { exec } from 'child_process'

let atc = async () => {
    let ex = exec('cd ../ && npx cypress run  --spec=' + list[req.query.id].value);
    ex.stdout.on('data', function (data) {
        console.log(data);
        logs.push(data);
    });



    await new Promise(m => setTimeout(m, 6 * 60 * 60 * 1000))
}

atc();