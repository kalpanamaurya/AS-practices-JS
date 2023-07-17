class password{
    constructor(){
    console.log("welcome to Password Generator")
   }
   generatePassword(len){
    if(len<5){
        console.log("your password should be atleast 5 character long")
    }

   }
}
 let p = new password()