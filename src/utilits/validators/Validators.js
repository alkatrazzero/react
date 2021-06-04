export const required=(value)=>{
    if(value) return undefined;
    return'field isrequired';

}

export const maxLengthCreator=(maxLength)=>(value)=>{
     if(value && value.length>maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}
export const maxLength15=(value)=>{
    if(value && value.length>15) return 'max length is 15 symbols ';
    return undefined;

}
export const minLengthCreator=(minLength)=>(value)=>{
    if(value&& value.length<minLength) return 'min length is 2 symbols';
    return undefined;

}