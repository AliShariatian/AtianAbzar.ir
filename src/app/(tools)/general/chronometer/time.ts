export const resultHandler = (time: number): { millisecond: string; second: string; minute: string } => {
   const minute = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
   const second = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
   const millisecond = ("0" + ((time / 10) % 100)).slice(-2);

   return { millisecond, second, minute };
};
