let str="ram    is   bumping      japak jampak     jampak jampak      jampak"
let word=""

for(let t of str){
    if(t!=" "){
        word=word+t
    }
    // else if(t==" ")
        else if(t==" " && word!="")
    {
        console.log(word)
        word=""
    }
}

console.log(word)