import { exec } from 'child_process'

exec('cd api && npm i && npm run start').stdout.on('data', function (data) {
    console.log(data);
});

exec(`
    DOTNET_ROOT=$HOME/.dotnet && export PATH=$PATH:$DOTNET_ROOT:$DOTNET_ROOT/tools
    cd email && dotnet run
`).stdout.on('data', function (data) {
    console.log(data);
});

