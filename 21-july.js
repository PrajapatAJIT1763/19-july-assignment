//  1. Print numbers from 1 to 100.
// Ans : 
for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  
  // 2. Print even numbers from 1 to 100.
  //   Ans : 
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  
  // 3. Print odd numbers from 1 to 100.
  //   Ans : 
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
  
  // 4. Print numbers from 100 to 1.
  //   Ans :
  for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
  
  // 5. Calculate the sum of numbers from 1 to 100.
  //   Ans :
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  
  // 6. Calculate the sum of even numbers from 1 to 100.
  //   Ans :
  let sumEven = 0;
  for (let i = 2; i <= 100; i += 2) {
    sumEven += i;
  }
  console.log(sumEven);
  
  // 7. Calculate the sum of odd numbers from 1 to 100.
  //   Ans
  let sumOdd = 0;
  for (let i = 1; i <= 100; i += 2) {
    sumOdd += i;
  }
  console.log(sumOdd);
  
  // 8. Print multiplication table of a given number.
  // Ans :
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
  
  // 9. Find the factorial of a given number.
  // Ans :
  let num2 = 5;
  let factorial = 1;
  for (let i = 1; i <= num2; i++) {
    factorial *= i;
  }
  console.log(factorial);
  
  // 10. Count the number of digits in a given number.
  // Ans :
  let num3 = 12345;
  let count = 0;
  while (num3 > 0) {
    num3 = Math.floor(num3 / 10);
    count++;
  }
  console.log(count);
  
  // 11. Reverse a given number.
  // Ans :
  let num4 = 12345;
  let reversedNum = 0;
  while (num4 > 0) {
    let digit = num4 % 10;
    reversedNum = reversedNum * 10 + digit;
    num4 = Math.floor(num4 / 10);
  }
  console.log(reversedNum);
  
  // 12. Check if a given number is a palindrome.
  // Ans :
  let num5 = 121;
  let reversedNum2 = 0;
  let temp = num5;
  while (temp > 0) {
    let digit = temp % 10;
    reversedNum2 = reversedNum2 * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  if (num5 === reversedNum2) {
    console.log("The number is a palindrome.");
  } else {
    console.log("The number is not a palindrome.");
  }
  
  // 13. Print the Fibonacci series up to a given number of terms.
  // Ans : 
  let numTerms = 10;
  let firstTerm = 0;
  let secondTerm = 1;
  for (let i = 0; i < numTerms; i++) {
    console.log(firstTerm);
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  
  // 14. Find the sum of digits of a given number.
  // Ans :
  let num6 = 12345;
  let sumDigits = 0;
  while (num6 > 0) {
    let digit = num6 % 10;
    sumDigits += digit;
    num6 = Math.floor(num6 / 10);
  }
  console.log(sumDigits);
  
  // 15. Find the product of digits of a given number.
  // Ans :
  let num7 = 12345;
  let productDigits = 1;
  while (num7 > 0) {
    let digit = num7 % 10;
    productDigits *= digit;
    num7 = Math.floor(num7 / 10);
  }
  console.log(productDigits);
  
  // 16. Check if a given number is an Armstrong number.
  // Ans :
  let num8 = 153;
  let sumCubes = 0;
  let temp2 = num8;
  while (temp2 > 0) {
    let digit = temp2 % 10;
    sumCubes += digit * digit * digit;
    temp2 = Math.floor(temp2 / 10);
  }
  if (num8 === sumCubes) {
    console.log("The number is an Armstrong number.");
  } else {
    console.log("The number is not an Armstrong number.");
  }
  
  // 17. Print all Armstrong numbers between 1 and 1000.
  // Ans :
  for (let i = 1; i <= 1000; i++) {
    let sumCubes2 = 0;
    let temp3 = i;
    while (temp3 > 0) {
      let digit = temp3 % 10;
      sumCubes2 += digit * digit * digit;
      temp3 = Math.floor(temp3 / 10);
    }
    if (i === sumCubes2) {
      console.log(i);
    }
  }
  
  // 18. Check if a given number is a perfect number.
  // Ans :
  let num9 = 6;
  let sumFactors = 1;
  for (let i = 2; i <= Math.floor(num9 / 2); i++) {
    if (num9 % i === 0) {
      sumFactors += i;
    }
  }
  if (num9 === sumFactors) {
    console.log("The number is a perfect number.");
  } else {
    console.log("The number is not a perfect number.");
  }
  
  // 19. Print all perfect numbers between 1 and 1000.
  // Ans :
  for (let i = 1; i <= 1000; i++) {
    let sumFactors2 = 1;
    for (let j = 2; j <= Math.floor(i / 2); j++) {
      if (i % j === 0) {
        sumFactors2 += j;
      }
    }
    if (i === sumFactors2) {
      console.log(i);
    }
  }

  // 20. Check if a given number is a prime number.
  // Ans :
let num10 = 7;
let isPrime = true;
for (let i = 2; i <= Math.floor(Math.sqrt(num10)); i++) {
  if (num10 % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("The number is a prime number.");
} else {
  console.log("The number is not a prime number.");
}

// 21. Print all prime numbers between 1 and 100.
// Ans :
for (let i = 2; i <= 100; i++) {
  let isPrime2 = true;
  for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
    if (i % j === 0) {
      isPrime2 = false;
      break;
    }
  }
  if (isPrime2) {
    console.log(i);
  }
}

// 22. Find the greatest common divisor (GCD) of two given numbers.
// Ans :
let num11 = 12;
let num12 = 18;
let gcd = 1;
for (let i = 1; i <= Math.min(num11, num12); i++) {
  if (num11 % i === 0 && num12 % i === 0) {
    gcd = i;
  }
}
console.log(gcd);

// 23. Find the least common multiple (LCM) of two given numbers.
// Ans :
let num13 = 12;
let num14 = 18;
let lcm = (num13 * num14) / gcd;
console.log(lcm);

// 24. Calculate the power of a number using a loop.
// Ans :
let num15 = 2;
let power = 3;
let result = 1;
for (let i = 1; i <= power; i++) {
  result *= num15;
}
console.log(result);

// 25. Convert a binary number to decimal.
// Ans :
let binaryNum = "10110";
let decimalNum = 0;
let power2 = 0;
for (let i = binaryNum.length - 1; i >= 0; i--) {
  if (binaryNum[i] === "1") {
    decimalNum += Math.pow(2, power2);
  }
  power2++;
}
console.log(decimalNum);

// 26. Convert a decimal number to binary.
// Ans :
let decimalNum2 = 22;
let binaryNum2 = "";
while (decimalNum2 > 0) {
  let remainder = decimalNum2 % 2;
  binaryNum2 = remainder + binaryNum2;
  decimalNum2 = Math.floor(decimalNum2 / 2);
}
console.log(binaryNum2);

// 27. Print the sum of the series: 1 + 1/2 + 1/3 + ... + 1/n.
// Ans :
let n = 5;
let sumSeries = 0;
for (let i = 1; i <= n; i++) {
  sumSeries += 1 / i;
}
console.log(sumSeries);

// 28. Print the sum of the series: 1^2 + 2^2 + 3^2 + ... + n^2.
// Ans :
let sumSquares = 0;
for (let i = 1; i <= n; i++) {
  sumSquares += i * i;
}
console.log(sumSquares);

// 29. Print the sum of the series: 1^3 + 2^3 + 3^3 + ... + n^3.
// Ans :
let sumCubes3 = 0;
for (let i = 1; i <= n; i++) {
  sumCubes3 += i * i * i;
}
console.log(sumCubes3);

// 30. Print the first n terms of the series: 1, 4, 9, 16,
// Ans :
for (let i = 1; i <= n; i++) {
  console.log(i * i);
}

// 31. Print the first n terms of the series: 1, 8, 27, 64,
// Ans :
for (let i = 1; i <= n; i++) {
  console.log(i * i * i);
}

// 32. Print the first n terms of the series: 1, -2, 3, -4, 5, ...
// Ans :
for (let i = 1; i <= n; i++) {
  console.log(i * (i % 2 === 0 ? -1 : 1));
}

// 33. Print the first n terms of the series: 2, 4, 8, 16, ..
// Ans :
for (let i = 1; i <= n; i++) {
  console.log(Math.pow(2, i));
}

// 34. Calculate the sum of the first n natural numbers.
// Ans :
let sumNatural = 0;
for (let i = 1; i <= n; i++) {
  sumNatural += i;
}
console.log(sumNatural);

// 35. Calculate the sum of the first n even numbers.
// Ans :
let sumEven2 = 0;
for (let i = 2; i <= 2 * n; i += 2) {
  sumEven2 += i;
}
console.log(sumEven2);

// 36. Calculate the sum of the first n odd numbers.
// Ans :
let sumOdd2 = 0;
for (let i = 1; i <= 2 * n - 1; i += 2) {
  sumOdd2 += i;
}
console.log(sumOdd2);

// 37. Print all the factors of a given number.
// Ans :
let num16 = 12;
console.log("Factors of " + num16 + " are:");
for (let i = 1; i <= num16; i++) {
  if (num16 % i === 0) {
    console.log(i);
  }
}

// 38. Print the prime factors of a given number.
// Ans :
let num17 = 12;
console.log("Prime factors of " + num17 + " are:");
for (let i = 2; i <= num17; i++) {
  while (num17 % i === 0) {
    console.log(i);
    num17 /= i;
  }
}
if (num17 > 1) {
  console.log(num17);
}

// 39. Print numbers from 1 to n with "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.
// Ans :
for (let i = 1; i <= n; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  if (output === "") {
    output = i;
  }
  console.log(output);
}

// 40. Print the numbers from 1 to n in reverse order.
// Ans :
for (let i = n; i >= 1; i--) {
  console.log(i);
}

// 41. Print all numbers between two given numbers.
// Ans :
let num18 = 5;
let num19 = 10;
for (let i = num18; i <= num19; i++) {
  console.log(i);
}

// 42. Calculate the product of the first n natural numbers (factorial).
// Ans :
let factorial2 = 1;
for (let i = 1; i <= n; i++) {
  factorial2 *= i;
}
console.log(factorial2);

// 43. Print a pattern of n rows with stars (e.g., 1st row: 1 star, 2nd row: 2 stars, etc.).
// Ans :
for (let i = 1; i <= n; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// 44. Print a pattern of n rows with numbers (e.g., 1st row: 1, 2nd row: 1 2, etc.).
// Ans :
for (let i = 1; i <= n; i++) {
  let numbers = "";
  for (let j = 1; j <= i; j++) {
    numbers += j + " ";
  }
  console.log(numbers);
}

// 45. Print a pattern of n rows with alternating 1s and Os.
// Ans :
for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += (j % 2 === 0) ? "0" : "1";
  }
  console.log(pattern);
}

// 46. Print a pattern of n rows with increasing numbers (e.g., 1st row: 1, 2nd row: 2 3, etc.).
// Ans :
for (let i = 1; i <= n; i++) {
  let numbers2 = "";
  for (let j = i; j <= 2 * i - 1; j++) {
    numbers2 += j + " ";
  }
  console.log(numbers2);
}

// 47. Print a pattern of n rows with decreasing numbers (e.g., 1st row: 1 2 3, 2nd row: 1 2, etc.).
// Ans :
for (let i = n; i >= 1; i--) {
  let numbers3 = "";
  for (let j = 1; j <= i; j++) {
    numbers3 += j + " ";
  }
  console.log(numbers3);
}

// 48. Print a pattern of n rows with numbers in reverse order (e.g., 1st row: 1, 2nd row: 2 1, etc.).
// Ans :
for (let i = 1; i <= n; i++) {
  let numbers4 = "";
  for (let j = i; j >= 1; j--) {
    numbers4 += j + " ";
  }
  console.log(numbers4);
}

// 49. Print the sum of the series: 1 - 1/2 + 1/3 - 1/4 + ... +/- 1/n.
// Ans :
let sumSeries2 = 0;
for (let i = 1; i <= n; i++) {
  sumSeries2 += (i % 2 === 0) ? -1 / i : 1 / i;
}
console.log(sumSeries2);

// 50. Print the sum of the series: 1 + 2 - 3 + 4 - 5 + ... +/- n.
// Ans :
let sumSeries3 = 0;
for (let i = 1; i <= n; i++) {
  sumSeries3 += (i % 2 === 0) ? i : -i;
}
console.log(sumSeries3);
