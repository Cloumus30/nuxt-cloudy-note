export function notifParse(type:string, message:any, code:Number = 400){
    const notifState = useNotifState();
    notifState.value = {
        type:type,
        message:`${code}: ${message}`
    }
}