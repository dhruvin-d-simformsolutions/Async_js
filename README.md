# Summery of Async.js library

### parallel(tasks : Function[]-Array of fn,callback-optional)
- Run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array.

### waterfall(tasks : Function[]-Array of fn,callback-optional)
- Runs the tasks array of functions in series, each passing their results to the next in the array. However, if any of the tasks pass an error to their own callback, the next function is not executed, and the main callback is immediately called with the error.

### series(tasks : Function[]-Array of fn,callback-optional)
- Run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. Otherwise, callback receives an array of results when tasks have completed.

### queue(Function(task,callback))
- Creates a queue object with the specified concurrency. Tasks added to the queue are processed in parallel (up to the concurrency limit). If all workers are in progress, the task is queued until one becomes available. Once a worker completes a task, that task's callback is called.

### whilst(test : condition, fn, callback)
- Whilst will execute the function fn while condition function returns true, it will call callback when the job is done or if any error occurs.