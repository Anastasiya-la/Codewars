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

//Count by X
function countBy(x, n) {
  var z = []
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z
}

//Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2){
    return 'Draw!';
  }
  if (p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!';
    } else if (p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'rock'){
      return 'Player 1 won!';
    } else {
      return 'Player 2 won!';
    }
};

// Sum Mixed Array
function sumMix(x){
  return x.map(elem => +elem).reduce((a,b) => a + b);
}

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

//Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

//If you can't sleep, just count sheep!!
var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i++){
     result += `${i} sheep...`;
  }
  return result;
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
   return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}


//The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

//Expressions Matter
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

//Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  return this.split('').map(elem => elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('');
}

// Welcome!
function greet(language) {
  let greeting = {
 
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'

}

return greeting[language]||greeting["english"];
  
}

//Convert a string to an array
function stringToArray(string){
  return string.split(' ');
  }

//Double Char
function doubleChar(str) {
  return str.split('').map(el => el + el).join('');
}

//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600)
}

//Can we divide it?
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

//You Can't Code Under Pressure #1
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

//Sentence Smash
function smash (words) {
  return words.join(' ');
   
};

//Grasshopper - Personalized Message
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
  // Add code here
}

//Transportation on vacation
function rentalCarCost(d) {
  if (d < 3){
    return d * 40;
  } else if (d >= 3 && d < 7){
    return d * 40 - 20;
  } else if (d >= 7) {
    return d * 40 - 50;
  }
  // Your solution here
}

//Will there be enough space?
function enough(cap, on, wait) {
  if (cap >= wait + on){
  return 0;
  } else {
    return wait + on - cap;
  }
}

//L1: Set Alarm
function setAlarm(employed, vacation){
  if (employed && vacation || employed === false){
    return false;
  } else {
    return true;
  };
  }

//Count Odd Numbers below n
function oddCount(n){
  return Math.floor(n / 2);
  }

//Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  if (avg < 60){
    return 'F';
  } else if (avg < 70){
    return 'D';
  } else if (avg < 80){
    return 'C';
  } else if (avg < 90){
    return 'B';
  } else {
    return 'A';
  }
}

//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(el => el % divisor === 0);
}

//Quarter of the year
const quarterOf = (month) => {
  return Math.ceil(month / 3);
}