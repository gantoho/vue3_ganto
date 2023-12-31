// 防抖函数的封装
export default function debounce(func: Function, delay: number = 1000){
  let timer: any
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}
