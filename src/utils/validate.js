export const checkvaliddata = (email,password)=>
{
    const isemailvalid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    const ispasswordvalid =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   
     if(!isemailvalid) return "Email ID is not valid";
     if(!ispasswordvalid) return "password is not valid";

     return null;
};