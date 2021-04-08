// import async from 'async';
import async from 'async';
var counter = 0;

//whilst(condition, fn, callback)
//Whilst will execute the function fn while condition function returns true, it will call callback when the job is done or if any error occurs.

async.whilst(
    function testCondition(callback) {
        return callback(null, counter < 5);
    },
    function increaseCounter(callback) {
        counter += 1;
        console.log('Counter is Now', counter);
        setTimeout(callback, 1000);
    },
    function callback(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Job complete');
    }
);