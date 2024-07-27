
let n = 3777 
let rev = 0

while(n>0){
    let last = n%10
    // console.log(last) // 6, 7, 1, 8
    rev = rev*10 +last // 6710+8 = 6718
    n = parseInt(n/10)
}
console.log(rev) // 6718
