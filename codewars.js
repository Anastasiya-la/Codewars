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

// Sum without highest and lowest number
function sumArray(array) {
    if (array == null || array.length < 2){
      return 0;
    } else {
    let min = Math.min(...array);
    let max = Math.max(...array);
      return array.reduce((a,b) => a + b, 0) - min - max;
  }
    }

//Total amount of points
    function points(games) {
        let sum = 0;
          for (let i = 0; i < games.length; i++)
          {
            if (games[i][0] > games[i][2])
              sum += 3;
            if (games[i][0] == games[i][2])
              sum += 1;
          }
          return sum;
        }

//Reversed sequence
        const reverseSeq = n => {
            let arr = [];
            for(; n > 0; n--){
            arr.push(n);
            }
            return arr;
          };

//Calculate average
        function find_average(array) {
            if(array.length < 1){
              return 0;
            }
            return array.reduce((a, b) => a + b) / array.length;
          }

//Count the Monkeys!
        function monkeyCount(n) {
            let arr = [];
            for (; n > 0; n--){
              arr.unshift(n);
            }
              return arr;
            }

//Array plus array
        function arrayPlusArray(arr1, arr2) {
            return arr1.concat(arr2).reduce((a, b) => a + b);
            }
// Is he gonna survive?
function hero(bullets, dragons){
  if (bullets >= dragons * 2){
    return true;
  }
    return false;
  }
//Do I get a bonus?
function bonusTime(salary, bonus) {
  if(bonus){
    return '£' + String(salary * 10);
  }
  return '£' + salary.toString();
// your code here
}
//Calculate BMI
function bmi(weight, height) {
  let bmi = weight / (height ** 2);
  if(bmi <= 18.5){
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  } else {
    return 'Obese';
  };
  
}

//Beginner - Reduce but Grow
function grow(x){
  return x.reduce((a, b) => a * b);
  }

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0;
  }
  return n * m;
}

//Convert a Boolean to a String
function booleanToString(b){
  return b === true ? 'true' : 'false';
  //your code here
}

//Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
     if (arr[i] + 1 !== arr[i + 1]) {
       return arr[i + 1]
     };
   };
   return null;
 }

 //Find Maximum and Minimum Values of a List
 var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

//MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.split('T').join('U');
}

//Opposites Attract
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
 }

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let averagePoint = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return yourPoints > averagePoint ? true : false;
}

// Sum Array 
function sum (numbers) {
  if (numbers.length < 1){
    return 0;
  }
   return numbers.reduce((a, b) => a + b);
    
};
