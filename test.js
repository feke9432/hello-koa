const os = require('os');
 
const { exec } = require('child_process');
 
exec('wmic path win32_VideoController get name', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行出错: ${error}`);
        return;
    }
    stdout = stdout.split('\r\n')
    console.log(stdout[2]);

    const cpus = os.cpus();
    console.log('CPU型号:', cpus[0].model);

    console.log('总内存:', os.totalmem() / (1024 * 1024 * 1024), 'GB');
});


