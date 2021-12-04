function writeLog(name){
    console.log("My log " + name);
}

function readLog(){
    console.log("Reading log");
}

module.exports = {
    writeLog,
    readLog
}