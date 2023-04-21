// Create an array of user objects
const users = [
	{ id: 1, name: "Leyla", email: "Leyla@gmail.com" },
	{ id: 2, name: "Yusra", email: "Yusra@gmail" },
	{ id: 3, name: "Rachel", email: "Rachel@gmail.com" },
	{ id: 4, name: "Eric", email: "Eric@gmail" },
	{ id: 5, name: "Hector", email: "Hector@gmail" },
];
  
  // Implement a function called fetchUserbyId that accepts a user ID as an argument and returns a promise.
  function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
        //Simulate an asynchronous request by using setTimeout() 
      setTimeout(() => {
        // Find user with the given ID in the users array
        let user = users.find(user => user.id === userId);
  
        if (user) {
          // If the user exists, resolve the promise with the user object
          resolve(user);
        } else {
          // If the user doesn't exist, reject the promise with an error message
          reject('User with ID' + userId  +  ' not found');
        }
      }, 1000); // Wait for 1 second before resolving or rejecting the promise
    });
  }
  
  // Use the fetchUserById function to fetch the user with ID 1
  fetchUserById(1)
    .then(user => console.log(user)) // Log the user object if the promise is fulfilled
    .catch(error => console.log(error)); // Log the error message if the promise is rejected
  
  // Chain another fetchUserById call to fetch the user with ID 2
  fetchUserById(2)
    .then(user => console.log(user)) // Log the user object if the promise is fulfilled
    .catch(error => console.log(error)); // Log the error message if the promise is rejected
  
    // Testing
    fetchUserById(10)
    .then(user => console.log(user)) // Log the user object if the promise is fulfilled
    .catch(error => console.log(error)); // Log the error message if the promise is rejected
  