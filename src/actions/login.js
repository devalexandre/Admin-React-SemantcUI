 const AUTH = 'AUTH'

 function  auth(user)  {
   return{
     type: AUTH,
     payload:user
   }
 }


export { AUTH , auth}
