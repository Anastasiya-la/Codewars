// Fake Binary
function fakeBin(x){
    let arr = x.split('')
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
      if(arr[i]<5) {
        arr[i] = 0;
        newArr.push(arr[i])
      } else {
        arr[i] = 1;
        newArr.push(arr[i])
      }
    }
    return newArr.join('');
  }

//Returning Strings
  function greet(name){
    return 'Hello, ' + name + ' how are you doing today?';
  }

//Jenny's secret message
  function greet(name){
  
    if(name === "Johnny"){
      return "Hello, my love!";
      }
     return "Hello, " + name + "!";
  }

// You only need one - Beginner
  function check(a, x) {
    return a.includes(x);
}