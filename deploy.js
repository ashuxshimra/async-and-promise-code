//Synchronous -> Solidity is a synchronous that is code executed line by line
// ASynchronous -> Javascript is ASynchronous by default that is vice versa of it

//Example of cooking of popcorn
//Synchronous
// 1. Put the popcorn in microwave
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// ASynchronous
// 1. Put the popcorn in microwave -> functions that have waiting period is called Promise that is promise based function
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise can be :
// pending - so waiting for popcorn to finish is the pending state 
// fulfilled - and when popcorn finsihed then promise will gave fulfilled state
// rejected - if in half way we abort the process then it is rejected state

async function main(){
    console.log('hi'); //to run this using node , go to terminal and type "node deploy.js" that is name of file and press enter this way it will run js code in backend
    let variable=8;
    console.log(variable);
    }
    main()
       .then(() => process.exit(0)) //since our main function is async we and while calling in order to wait and print if there is any error it gets , we have used this code just copied and pasted
      .catch((error) => {
        console.error(error);
        process.exit(1);
       });
            
    
    
    //Set up Movie night
    // a)cook popcorn
    // b)pour drinks
    // c)start movie
    
    //so we make the function for above and a and b has to finsih then only we can start movie hence a and b are waiting functions that is promise has to be returned from them whether fulfilled or rejected that is await for them first and then move on
    //so we will use a lot of async function where we will await for a statement say while deploying sc we have to await otherwise even before it being deployed , if it goes further then code wont work 
    async function setupMovienight(){
        await cookPopcorn(); //this await implies it is calling a waiting function that a function which will take time and return a promise that is fulfilled or rejected and then move on to the next line
        await pourDrinks(); 
        startMovie(); //now after finishing the above functions only we can start the movie
    }
    //when we deploy a sc ? wait for it to be deployed
    function cookPopcorn(){
    // some code here
        return Promise( /*some code here*/); 
    }