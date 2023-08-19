export const useNotifState = () => useState('notifErr', () => {
   return  {type:'info', message:''}
})

export const useLoad = () => useState('load', () => {
   return true;
});