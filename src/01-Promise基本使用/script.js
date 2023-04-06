/* 
点击按钮，有30%概率中奖
*/

// 生成指定范围内随机数
function random(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m)
}

document.getElementById("btn").onclick = function () {
  // 普通回调函数实现
  // setTimeout(() => {
  //   if (random(0, 100) < 30) {
  //     alert("恭喜你，中奖了！！！")
  //   } else {
  //     alert("再接再厉！")
  //   }
  // }, 1000)

  // Promise实现
  // resolve 解决 函数类型数据
  // reject 拒绝 函数类型数据
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = random(1, 100)
      if (res < 30) {
        resolve(res) // 将Promise对象设置为成功
      } else {
        reject(res) // 将Promise对象设置为失败
      }
    }, 1000)
  })

  // 调用then 方法
  p.then((value) => {
    alert("恭喜你，中奖了！！！，您的中奖数字为 " + value)
  }, (reason) => {
    alert("再接再厉！您的号码为 " + reason)
  })
}