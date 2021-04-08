import async from "async";
const addFive = (num: number,cb: (arg0: null | Error, arg1: any) => void) => {
    cb(null,num+5)
}

const timesTen = (num: number,cb: (arg0: null | Error, arg1: number) => void) => {
    cb(null,num * 10)
}

// perform operation in correct order : addFive(timesTen(5)) => (5+(5*10))
var calculate = async.compose(addFive,timesTen)

calculate(5,(err: Error,result:number)=>{
    console.log(result);
    //result : 55
})

// seq : perform operation in reverse order : (10 * ( 5 + 5))
var calculate = async.seq(addFive,timesTen)
calculate(5,(err: Error,result: number)=>{
    console.log(result);
    // result : 100
})