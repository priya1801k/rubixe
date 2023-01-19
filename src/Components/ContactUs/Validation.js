export const alphanumericValidation=(input)=>{
    let result = /^[a-zA-Z]{3,18}$/.test(input);
    if(result){
        return false;//no error 
    }else{
        return true;//error occured
    }
}

export const emailValidation=(input)=>{
    let result = /^[a-zA-Z0-9_-]{3,30}@[a-zA-Z]{4,10}\.[a-zA-Z]{1,10}$/.test(input);
    if(result){
        return false;
    }else{
        return true;
    }
}

export const telephoneValidation=(input)=>{
    let result = /^[0-9]{10}$/.test(input);
    if(result){
        return false;
    }
        return true;
    
}
