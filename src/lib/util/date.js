
export function dateShow() {
    const dateObject = new Date();
    const month = (dateObject.getMonth() + 1 < 10) ? "" + dateObject.getMonth() + 1 : dateObject.getMonth() + 1
    return `${dateObject.getDate()}-${month}-${dateObject.getFullYear()}`;
}
export function clockShow() {
    const dateObject = new Date();
    return dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds()
}
export const date = new Date().getDate();
export const month = new Date().getMonth() + 1 < 10 ? "" + new Date().getMonth() + 1 : new Date().getMonth() + 1;
export const year = new Date().getFullYear();
