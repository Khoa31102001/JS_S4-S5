const a = prompt("Please enter number a", "0");
const b = prompt("Please enter number b", "0");


const UCLN = (a,b) =>{
  if(b == 0){
    return a;
  }
  return UCLN(b,a%b);
}

const BCNN = (a,b) =>{
  return (a * b) / UCLN(a, b);
}

const valueUCLN =UCLN(12,9)

const valueBCNN =BCNN(12,9)

alert( "UCLN: "+ valueUCLN + " BCNN: "+ valueBCNN);