const fs = require("fs")
const { dirname } = require("path")

const readStream = fs.createReadStream(__dirname + "/file1.txt","utf-8")
const writeStream = fs.createWriteStream(__dirname + "/streamOutput.txt","utf-8")

// readStream.on("data", (chunks)=> {
//     console.log(chunks)
//     writeStream.write(chunks)
// })

//using pipes

readStream.pipe(writeStream)