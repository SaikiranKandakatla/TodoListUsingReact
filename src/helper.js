let RandomThreeDigitNumber=(n)=>{
        let arr=new Array(n);
        for(let i=0;i<n;i++){
            arr[i]=Math.floor(Math.random()*10);
        }
        return arr;
  
    }
let sum=(arr)=>{
    return arr.reduce((res,ele)=>{return res+ele},0)
}
export {RandomThreeDigitNumber,sum};