
/**
 * 格式化日期
 * @param {*} val
 */
export const fmtDate =(date, fmt) =>{
  if (!date) {
    return
  }
  let getDate = new Date(date);
  let o = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    'S': getDate.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt;
}
 /**
 * 格式化时间
 * @param {*} val
 */
  export const fmtData =(data, num) =>{
    let fmt
  data = parseInt(data)
   // 取第一个数字
   if(num ===1) {
     fmt = parseInt(data / 10)
   }
  // 取第二个数字
  if (num === 2) {
    fmt = data % 10
  }
  return fmt
}



