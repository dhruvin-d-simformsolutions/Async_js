import async from "async";

//Async example for Sign Up flow
async.auto({

    
    get_username : (callback ) =>{
        console.log('in get_username');
        // async code to get some data
        callback(null, 'Zhi');
    },
    connect_to_db: (callback)=>{
        console.log('in connect_to_db');
        var connected = true;  //set this to false here to simulate DB failure

        //Check connection
        if (connected) {
            callback(null, connected);
        } else {
            callback(new Error('Error connecting to DB'), null);
        }
    },
    check_if_user_exist: ['get_username', 'connect_to_db', (results,callback)=>{
        
        console.log('in check_if_user_exist', JSON.stringify(results));
        //check if user exists in db...
        var userExists = false;

        if (userExists) {
            callback(new Error('User already exists in db'), null);
        } else {
            setTimeout(function() {
                callback(null, userExists);
            }, 1000);
        }
    }],
    sign_up: ['check_if_user_exist', function(results,callback){
        console.log('in sign_up', JSON.stringify(results));

        var username = results.get_username;
        var isDBConnected = results.connect_to_db;
        var userExists = results.check_if_user_exist;
        // console.log(username, isDBConnected, userExists);

        if (username && isDBConnected && !userExists) {
            callback(null, {'status': '200', 'msg':'Successfully signed up user'});
        } else {
            callback(new Error('Error signing up user'), null);
        }

    }]
}, (err, results) => {
        console.log('error = ', err);
        console.log('results = ', results);
    });