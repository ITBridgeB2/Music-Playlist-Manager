 //Message.js file
 function getMessage(){
    const now = new Date();
    const hour = now.getHours();
    if(hour<12)
    {
        return "good morning";
        
    }
    else if(hour <18){
        return "good afternoon";

    }
    else{
        return "good evening";

    }
}
module.exports.getMessage = getMessage;