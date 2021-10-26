const fileUrl = 'C:/Users/47700243/Downloads/teldata.ydata' // provide file location

const fs = require('fs')
var resource = 'demoresource' + Math.floor((Math.random() * 100) + 1);
let temp = Math.floor((Math.random() * 100) + 1);
let presure = Math.floor((Math.random() * 150) + 1);
var ts = Math.round((new Date()).getTime() / 1000);

console.log(ts);
fs.appendFileSync(fileUrl, '\n' + resource + ',' + ts + "," + temp + "," + presure, function (err) {
    if (err) {
        return console.error(err);
    }
})


fs.readFile(fileUrl, (err, data) => {
    if (err) throw err;

    console.log(data.toString());
})