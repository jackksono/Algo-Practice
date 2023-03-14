/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {
    let cache = {};
    //let hasBeenCalled = false
  return function (arg) {
    if (Object.hasOwn(cache, arg)) {
        return cache[arg]
    }
    const result = func(arg);
    cache[arg] = result;
    return result;
}
}

fastCache(6)
fastCache(4)
fastCache(5)   
fastCache(4)
/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
let tracksCalled = new Set();
let hasBeenCalled = false
  return function(...args){
        tracksCalled.forEach(element => {
            if (!tracksCalled.has(element)) tracksCalled.add(func(...args))
        });
            return (func(...args))
      }
    };


module.exports = {fastCache, fastCacheAdvanced};