// let  n =78934
// //step  1 = product  of digit  7*8*9*3*4=1512
// //step  2 = product of digit+n =78934+1512=80446
// //step  3 = product of digit of step 2  8*0*4*4*6=0;
//  function productOfDigit(n){
// let mul=1;
//     while(n>0){
//         let last=n%10;
//         mul=mul*last;
//         n=parseInt(n/10);
//     }
//     return mul;
//  }
// let  orignalnumber =  7890
// let  x  = productOfDigit(orignalnumber); //
// console.log(x);

function productOfNumber(n){
    let mul = 1 
    while(n>0)
    {
        let last = n%10
        mul=mul*last;
        n=parseInt(n/10)
    }
    return mul
    }

    let originalnumber = 125
    let x = productOfNumber(originalnumber)
    console.log(x)
    let step2ans = x+ originalnumber
    let y = productOfNumber(step2ans)
    console.log(y)