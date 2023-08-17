export const useNotifState = () => useState('notifErr', () => {
   return  {type:'info', message:''}
})