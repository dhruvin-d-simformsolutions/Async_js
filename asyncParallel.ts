import async from "async";
//Example of async.parallel

//Function Example
async.parallel([
    function (callback) {
        setTimeout(function(){
            callback(null, "One function");
        },2000)
        // callback("Error", null);
    },
    function (callback) {
        setTimeout(function(){
            callback(null, "Two function");
        },2000)
    },
], (err, result) => {
    console.log(result);
});


var stack = []
const functionOne  = (callback : Function) => {
    setTimeout(function(){
        callback(null, "One function");
    },2000)
    // callback("Error", null);
}
const functionTwo = (callback : Function) => {
    setTimeout(function(){
        callback(null, "Two function");
    },100)
}
const functionThree = (callback : Function) => {
    callback(null, "Three function");
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack,(err,result)=>{
    console.log(result);        
})




//Object Example
var stack1: any = {}
stack1.getUsername = (callback: Function) => {
    const userName = "Dhruvin";
    callback(null, userName);
}

stack1.getAge = (callback: Function) => {
    const Age = 20;
    callback(null, Age);
}

stack1.getGender = (callback: Function) => {
    const gender = 'Male';
    callback(null, gender)
}

async.parallel(stack1, (err, result) => {
    if (err) {
        console.error(err)
        return;
    }
    console.log(result);
})
