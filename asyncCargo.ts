import async from "async";
import _ from "lodash";

var taskList = _.times(10, _.uniqueId.bind(null, "task_"));
var tasksCargo = async.cargo(function(tasks : any,callback){
    for (var i = 0; i < tasks.length;i++){
        console.log("Working on" + tasks[i].name);
    }
    callback()
},3)

_.each(taskList,function(task){
    tasksCargo.push({name : task},function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log('Task' + task + ' is done');
    })
})