import async from 'async';

var targetNumber = 0;
async.forever(
    function checkIfDone(next){
        targetNumber++;
        if(targetNumber === 500){
            next(new Error('Target Number reached'));
        }else{
            console.log('Increasing Target value',targetNumber);
            next()
        }
    },
    function finished(err){
        if(err){
            console.log(err);
        }
    }
)