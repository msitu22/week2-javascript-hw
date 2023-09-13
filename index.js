// Create a database that contains user information
const userDatabase = {
    '1': {
      name: 'Donald Trump',
      email: 'DonaldT@gmail.com',
    },
    '2': {
      name: 'Nicki Minaj',
      email: 'NickiM@gmail.com',
    },
  };

// 1. Part1: callbacks - 10
function getUserData(userId, callback) {
setTimeout(() => {
    const userData = userDatabase[userId];
    if (userData) {
    callback(userData);                 // Call the callback with data if the userId exists
    } else {
    callback('User not found');         // Call the callback with an error message if the userId does not exist     
    }
}, 1000); // Simulate a 1-second delay
}

// Callback function to handle the result of getUserData
function handleUserData(error, data) {
if (error) {
    console.log(error);                 // Handle the error if it exists
} else {
    console.log('User Info:', data);    // Handle the data if it exists
}
}

// Examples for fetching user data
// example 1 - try the valid userId:
const userId = '1';

// // example 2 - try the invalid userId:
// const userId = '4';

getUserData(userId, handleUserData);    // Call the getUserData function with the userId and callback function



// ----------------------------------------------------------------------------------------------------------------------------
// 2. Part 2: Promises - 20
function getUserData(userId) {
    return new Promise((resolve, reject) => {   // Promise constructor is taking a callback function with two parameters: resolve and reject
        setTimeout(() => {                     
            const userData = userDatabase[userId];  // Inside the callback function, we are fetching the user info/data from the userDatabase object
            if (userData) {                         // If the user data exists, we resolve the promise with the user info/data
            resolve(userData);                  
            } else {                                // If the user data does not exist, we reject the promise with an error message: User not found
            reject('User not found');           
            }
        }, 1000); 
    });
}
  
// Examples for fetching user data
// // example 1 - try the valid userId:
// const userId = '1';
// example 2 - try the invalid userId:
const userId = '4';

getUserData(userId).then((data) => {            // Call the getUserData function and the 'then' method on the returned promise object
    console.log('User Data:', data);            // Handle resolved data if the promise is resolved
}).catch((error) => {
    console.log(error);                         // Handle rejected error if the promise is rejected
});



// ----------------------------------------------------------------------------------------------------------------------------
// 3. Part 3: Error Handling - 20
function getUserData(userId) {
    return new Promise((resolve, reject) => {  
        setTimeout(() => { 
            if (userId < 0) {                       // Check if the userID is negative
            reject('Invalid user ID');            // If the userId is negative, reject with an error message: Invalid user ID
            } else {
            const userData = userDatabase[userId];
            if (userData) {                       // If the user info/data exists, resolve with the user data
                resolve(userData);                 
            } else {                              // If the user info/data does not exist, reject with an error message: User not found
                reject('User not found');         
            }
            }
        }, 1000);
    });
    }

// // Examples for fetching user data with error handling
// example 1 - try the negative userId:
const userId = '-1'; 
// // example 2 - try the valid userId:
// const userId = '1';

getUserData(userId)                             // Call the getUserData function and the 'then' method on the returned promise object
.then((data) => {                               
    console.log('User Info:', data);            // Handle resolved data if the promise is resolved
})  
.catch((error) => {                             // Handle rejected error if the promise is rejected
    console.log(error);                         
});



// // ----------------------------------------------------------------------------------------------------------------------------
 // 4. Part 4: Async/Await - 20
function getUserData(userId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = userDatabase[userId];
            if (userData) {
            resolve(userData);           
            } else {
            reject('User not found'); 
            }
        }, 1000);
    });
    }
    
// Examples for fetching user data with async/await
// // example 1 - try the valid userId:
// const userId = '2';

// example 2 - try the invalid userId:
const userId = '4';

// The await keyword is used inside an asynchronous function to pause the execution of the function until a promise is resolved or rejected.
async function fetchUserData() {                        
    try {                                                 // Wrap the async code in a try/catch block              
        const userData = await getUserData(userId);      // Call the getUserData function and await the returned promise object 
        console.log('User Info:', userData);             // Handle resolved data if the promise is resolved
} catch (error) {                                        // Handle rejected error if the promise is rejected
        console.log(error);                                 
    }
    }

fetchUserData();                                         // Call the async function