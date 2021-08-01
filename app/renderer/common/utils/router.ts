/**
 * 如果是http或https开头，则是外部链接，否则是内部链接
 * @param url 
 * @returns 
 */
export function isHttpOrHttpsUrl(url:string):boolean{
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}