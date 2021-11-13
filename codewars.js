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
//Correct the mistakes of the character recognition software
function correct(string)
{
	return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Sort and Star
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

//Area or Perimeter
const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (l + w) * 2;
  // Return your answer
};

//Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  
  return name;
}

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  switch(current){
      case 'green':
      return 'yellow';
      case 'yellow':
      return 'red';
      case 'red':
      return 'green';
  }
}

//All Star Code Challenge #18
function strCount(str, letter){  
  return str.split(letter).length - 1;
}

//Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  switch (humanYears) {
     case 1:
       return [1, 15, 15]
     case 2:
       return [2, 24, 24];
     default:
       return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
   }
 }

 // opposite number
function opposite(number){
  return number * (-1);
  }
  console.log(opposite(1));


// even or odd
function even_or_odd(number){
  if(number % 2 === 0){
      return "Even"
  } else {
      return "Odd"
  }
}


//Century from year  
function century(year){
  return Math.ceil(year/100);
}
console.log(century(1920));

//Convert number to reversed array of digits
function digitize(n){
  let arr = [];
  while (n > 0){
      arr.push(n % 10);
      n = Math.floor (n / 10);
  }
  return arr;
}

// reversed strings
function solution(str){
  return str.split('').reverse().join('');
}

// The Wide-Mouthed frog!
function  mouthSize(animal){
  if (animal==='alligator'){
      return 'small';
  } else {
      return 'wide';
  }
}

// Disemvowel Trolls
function disemvowel(str){
  return str.replace(/[aouei]/gi, '');
}

//Rearrange Number to Get its Maximum

var maxRedigit = function(num) {
  if(num < 100 || num >999){
    return null;
  }
  let result = +num.toString().split('').sort((a,b)=>b-a).join('');
  return result;
};

// Are arrow functions odd?
function odds(values){
  return values.filter(values => values%2);
}

//Removing Elements
function removeEveryOther(arr){
  for(let x = 1; x < arr.length; x++){
      arr.splice(x,1);
  }
  return arr;
}

//Palindrome Strings
  function isPalindrome(line){
    line = line + '';
    if(line===line.split('').reverse().join(''))
    return true;
    else 
    return false;
}

//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch(operator){
     case 'add': return a+b; break;
     case 'multiply': return a*b; break;
     case 'divide': return a/b; break;
     case 'subtract': return a-b; break;
  }
}

// Sum of Positive
function positiveSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          sum = sum + arr[i];
      }
  }
  return sum;
}

 // Make negative

 function makeNegative(num){
  if(num>0){
      return -num;
  }
  return num;
}

// Remove First and Last Character

function removeChar(str){
  let lastChar = str.length - 1;
  return str.slice(1,lastChar);
}

//Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
 }

//Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - (a + b);
}

//Switch it Up!
function switchItUp(number){
  switch(number){
      case 0:
      return 'Zero';
      case 1:
      return 'One';
      case 2:
      return 'Two';
      case 3:
      return 'Three';
      case 4:
      return 'Four';
      case 5:
      return 'Five';
      case 6:
      return 'Six';
      case 7:
      return 'Seven';
      case 8:
      return 'Eight';
      case 9:
      return 'Nine';
  }
}

//Keep up the hoop
function hoopCount (n) {
  return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

//Squash the bugs
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
    return longest;
}

//My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse();
 }

//Is the string uppercase?
 String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}

//N-th Power
function index(array, n){
  return array[n] ** n || -1;
}

//Generate range of integers
function generateRange(min, max, step){
  let arr = [];
  for (let i = min; i <= max; i += step){
    arr.push(i);
  }
  return arr;
}

//Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

//Sum The Strings
function sumStr(a,b) {
  a = +a;
  b = +b;
return String(a + b);
}

//Parse nice int from char problem
function getAge(inputString){
  return +inputString[0];// return correct age (int). Happy coding :) 
}

//Well of Ideas - Easy Version
function well(x){
  let goodLength = x.filter(el => el === 'good').length;
  switch(goodLength){
      case 0:
      return 'Fail!';
      case 1:
      case 2:
      return 'Publish!';
      default:
      return 'I smell a series!';
  }
}

//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(el =>Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el * el);  
}

//Get Nth Even Number
function nthEven(n){
  return (n - 1) * 2;
}

//Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

//Powers of 2
function powersOfTwo(n){
  let arr = [];
  for (let i = 0; i <= n; i++){
    arr.push(Math.pow(2, i));
  }
  return arr;
}

//Grasshopper - If/else syntax debug
function checkAlive (health) {
  return health > 0;
}

//No zeros for heros
function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/, ''));
}

//Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

//String repeat
  function repeatStr(n, s){
    return s.repeat(n);
}


//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool){
  if(bool){
      return 'Yes';
  }else{
      return 'No';
  }
}

// Summation
let summation = function(num){
  let sum = 0;
  for (let i = 0; i <= num; i++){
      sum = sum + i;
  }
  return sum;
}


// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min.apply(null, args);
  }
}

// remove string spaces
function noSpace(x){
  return x.split(' ').join('');
  }

// Convert a Number to a String!
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

//Hello, Name or World!
function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;
}

//A wolf in sheep's clothing
function warnTheSheep(queue) {
  let numOfSheep = queue.reverse().indexOf('wolf');
  return numOfSheep === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${numOfSheep}! You are about to be eaten by a wolf!`;
}

// Vowel count
function getCount(str){
  let strToArray = Array.from(str);
  return strToArray.filter(vowelLetter =>'aeiou'.includes(vowelLetter)).length;
}

// square every digit
function squareDigits(num){
  return Number(('' + num).split('').map(function (val){ return val * val }).join(''));
}