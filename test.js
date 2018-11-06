const {spawn} = require('child_process');
const path = require('path');
function serialize(data) {
    if (Buffer.isBuffer(data)) {
        return data.toString();
    }
    return data;
}
console.log('NODE_ENV:',process.env.NODE_ENV);
const childProc = spawn('node',[path.resolve(__dirname,'test2.js')],{env:{NODE_ENV:'some_new_env'}});
childProc.stdout.on('data', (data) => {
    console.log(serialize(data));
});

childProc.stderr.on('data', (data) => {
    console.log(serialize(data));
});

childProc.on('close', (code) => {
    console.log(`childProc closed ${code}`);
});

