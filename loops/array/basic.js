// let str="ram is dancing"
// let arr=[]

// for(let i=0;i<=str.length-1;i++)
//     {
//         arr[i]=str[i]
//     }

//     console.log(arr)


let previousver="120.13.56"
let currentver="121.0012.56"

let prevArr=previousver.split(".")
let currver=currentver.split(".")

if(+prevArr[0]>=+currentver[0])
    {
        console.log("previous version is greater")
    
    }
else if(+prevArr[0]<+currver[0])
    {
        console.log("current version is greater")
    
    }
else if(+prevArr[0]==+currver[0])
    {
        if(+prevArr[1]>+currver[1])
            {
                console.log("previous version is greater")
            }
        else if(+prevArr[1]<+currver[1])
            {
                console.log("current version is greater")
            
            }
        else if(+prevArr[1]==+currver[1])
            {
                if(+prevArr[2]>+currver[2])
                    {
                        console.log("previous version is greater")
                    }
                else if(+prevArr[2]<+currver[2])
                    {
                        console.log("current version is greater")
                    
                    }
                else
                    {
                        console.log("both version are equal")
                    }
            }
    }

    