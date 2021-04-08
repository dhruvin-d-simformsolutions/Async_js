import async from "async";
// Waterfall Method
async.waterfall([
    function (callback : Function) {
        setTimeout(function () {
            callback(null, "One")
        }, 5000)
    },
    // First function callback argument goes as a input into next function's first parameter
    function (arg : string,callback : Function) {
        console.log(arg);
        setTimeout(function () {
            callback(null, "two")
        }, 3000)
    }
], function (err, result) {
    if (err) {
        console.log(err); 
        return;
    }
    console.log(result);
})


// Series Method
async.series([
    function one(callback){
        callback(null,"One")
    },
    function two(callback){
        callback(null,"Two2222")
    },
    function three(callback){
        callback(null,"Three")
    }
],(err,result)=>{
    console.log(result);
})