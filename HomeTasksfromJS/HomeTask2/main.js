let n=prompt("Please Enter Number");
let n1=0;
let n2=1;
let nextn=0;
function fibonaci(n){
    if(n>=2){
        for(let i=2;i<=n;i++){
            nextn=n1+n2;
            n1=n2;
            n2=nextn;
        }
        return nextn;
    }
    else if(n==0){
        return n1;
    }
    else{
        return n2;
    }
}
console.log(fibonaci(n));