// Promise封装fs文件读取
const fs = require("fs")

let p = new Promise((resolve, rejects) => {
  fs.readFile("./resource/content.txt", (err, data) => {
    //如果出错
    if (err) rejects(err)
    resolve(data)
  })
})

p.then(value => {
  console.log(value.toString());
}, reason => {
  console.log(reason);
})