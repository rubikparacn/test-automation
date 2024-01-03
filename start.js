const exec = require('child_process').exec
const execSync = require('child_process').execSync

execSync('git fetch && git pull');
exec('cd api && npm i && npm run start').stdout.on('data', function (data) {
    console.log(data);
});

exec(`
    DOTNET_ROOT=$HOME/.dotnet && export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools
    cd email && dotnet run
`).stdout.on('data', function (data) {
    console.log(data);
});

