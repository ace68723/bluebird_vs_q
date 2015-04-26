// var Q = require('q');
var bluebird = require('bluebird');
// var githubApi = require('github');

// var github = new githubApi({
// 	version:'3.0.0'
// })

// var getUserWithCallback =	function(user, callbcak) {

// 	github.search.users({q: user}, function(err,res) {

// 		if(err){
// 			callbcak(err, null)
// 		}else{
// 			var avatarUrl = res.items[0].avatar_url;
// 			callbcak(null, avatarUrl);
// 		}

// 	})

// };

// getUserWithCallback('ace68723', function(err, avatar) {
// 	console.log('got avatar', avatar)
// });


var bluebirdTest = function(number) {
    return new bluebird(function(resolve, reject) {

		
			if(number > 5){
                
                setTimeout(function() {
                  
                        reject({
                               rejectedData: "error"
                             });

                }, 5000);


			}else{
                setTimeout(function() {
                    resolve({
                          'testPass': 'hello world'
                        });
                }, 5000);

			}
    });

};



bluebirdTest(4)
.then(function(data) {
	console.log('bluebird', data);
})
.catch(function(error) {
	console.log(error)
})


// ------------ Q -------------
// var getUserAvatarWithQ = function(user) {
//   // Create a deferred object using Q's 'defer' constructor -> this is special to Q's implementation
//   var deferred = Q.defer();
 
//   github.search.users({ q: user }, function(error, response) {
//     if (error) { deferred.reject(error); } // deferred.reject syntax is special to Q
    
//     else {
//       var avatarUrl = response.items[0].avatar_url;
//       deferred.resolve(avatarUrl); // deferred.resolve syntax is special to Q
//     }
//   });
    
//   // The promise we want to return exists on Q's deferred object
//   return deferred.promise;
// };
 
// // Invoke our 'promisified' function
// // Even though we use different syntax to create promises with bluebird and Q, the returned promise works exactly the same way
// // i.e. they all have .then(), .catch(), .finally()
// getUserAvatarWithQ('danthareja')
//   .then(function(url) {
//     // console.log('Got url with q promises', url);
 
//     // Then's are chainable! Whatever we return in the previous 'then' gets passed into the next one
//     return url + ' SUPERAWESOMEAPPENDEDTEXT!!!!!! WOO!';
//   })
//   .then(function(appendedAvatarURL) {
//     // console.log('Check out the new appended url', appendedAvatarURL);
 
//     // We can return promises in the chain too! 
//     // Our next then function will only run after the promise is resolved.
//     // Herein lies the true power of promsies, play around with this to learn more!
//     var deferred = Q.defer();
    
//     // use setTimeout to simulate an aync process before the resolve. Anything asyncronous could happen here
//     setTimeout(function() {
//       deferred.resolve(appendedAvatarURL + ' and we did more async!');
//     }, 1000);
 
//     return deferred.promise;
//   })
//   .then(function(appendedAvatarURLAfterAnotherAsyncOperation) {
//     // This 'then' function will only execute after the promise returned from the previous function has been resolved
//     console.log('Now check out the even moar appended url! Woah!', appendedAvatarURLAfterAnotherAsyncOperation);
//   })
//   .catch(function(error) {
//     // Any error caught in a 'then' function above will break the chain and immediately run this function
//     // console.log('Error somewhere in the getUserAvatarWithQ chain', error);
//   })
//   .finally(function() {
//     // the 'finally' function will always get run regardless if the promise was resolved (successful) or rejected (errored)
//     // console.log('This will always get run');
//   });
  







