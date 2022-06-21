const input = '1355155406147030919719986244962364995163446476241115028244151109733734294550583101952104374190651219061463012149857552129729422237465796998034344182450991415';
let arr = input.split('');

const poros = {

};
 for (let i = 0; i < arr.length - 1; i++){
    if (poros[arr[i]+arr[i+1]]){
        poros[arr[i]+arr[i+1]]++;
    }else{
        poros[arr[i]+arr[i+1]] = 1;
    }

 }

 function findKey(object, value) 
{
    let keyArr=[];
    for (let key in object)
    {
        if (object[key] === value) 
        {
            keyArr.push(key);
        }
    }
    if(keyArr.length >0 )
    {
    return keyArr;
    }
    else
    {
        return "Not Found";
    }
}
let max = Object.values(poros).sort((prev, next) => next - prev)[0]
 console.log(findKey(poros,max), max);
