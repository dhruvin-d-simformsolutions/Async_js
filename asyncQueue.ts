import async from 'async';
import _ from 'lodash';

//Generate an array of 10 random tasks;
var tasksList = _.times(10, _.uniqueId.bind(null, 'task_'));

var tasksQueue = async.queue(function (task: { name: string }, callback) {
    console.log('Performing task: ' + task.name);
    console.log('Waiting to be processed: ', tasksQueue.length());
    console.log('--------------------------------');

    //Simulate intensive processing
    setTimeout(function () {
        // If you want to pass an error object here, it will be caught in the task handler
        // callback('something went wrong');
        callback();
    }, 500);

}, 5);

// When all is processed, drain is called
tasksQueue.drain().then(() => {
    console.log('all items have been processed.');
}).catch((err) => {
    console.log(err);
})

_.each(tasksList, function (task) {
    tasksQueue.push({ name: task }, function (err) {
        //Done
        if (err) {
            console.log(err);
        }

    });
});

//Puts a tasks in front of the queue
tasksQueue.unshift({ name: 'Most important task' }, function (err) {
    //Done
    if (err) {
        console.log(err);
    }
});