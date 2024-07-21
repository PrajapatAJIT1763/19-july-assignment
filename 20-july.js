// Que 1 : Input a value and check whether its positive, negative or Zero
// // Ans : 
let a=parseInt(prompt('Enter a value : '))
if(a>=0){
    if(a==0){
        alert('Zero!')
    }
    else{
        alert('Positive!')
    }
} else{
    alert('Negative!')
}

// Que 2 : Check if a given year is a leap year or not.
// Ans :
    let b=parseInt(prompt('enter the year'))
    if((0==b%4)&&(0!=b%100)||(0==b%400)){
        console.log(b +'is a leap year')
    }else {
        console.log(b +'is not a leap year')
    }

// // Que 3 : find if a number is even or odd 
// // Ans :
let c=parseInt(prompt('Input a value : '))
if(c%2==0){
    alert('Even')
}
else{
    alert('Odd')
}

// // Que 4 : Find maximum of three numbers
// // Ans : 
let d1=parseInt(prompt('Input first value :'))
let d2=parseInt(prompt('Input second value :'))
let d3=parseInt(prompt('Input third value :'))
if(d1>=d2 && d1>=d3){
    alert('First value is maximum!')
} else if(d2>=d1 && d2>=d3){
    alert('Second value is maximum!')
}
else if(d3>=d1 && d3>=d2){
    alert('Third value is maximum')
}
else{
    alert('Invalid input numbers!')
}

// // Que 5 : Find sum of positive numbers in an array
// // Ans :
let e1=parseInt(prompt('Input first value : '))
let e2=parseInt(prompt('Input second value : '))
let e3=parseInt(prompt('Input third value : '))
let e_sum=0;
if(e1%2==0){
    e_sum=e_sum+e1;
} else {
    console.log(" ")
}
if(e2%2==0){
    e_sum=e_sum+e2;
} else{
    console.log(" ")
}
if(e3%2==0){
    e_sum=e_sum+e3;
} else{
    console.log(" ")
}
console.log(e_sum)

// // Que 6 : Check if a number is prime or not
// // Ans : 
let f=parseInt(prompt('Input a value : '))
for(let i=2;i<=f;i++){
    if(f%i==0){
        if(i==f){
            alert("Prime number!")
        } else{
            alert("Not a prime number!")
        }
    } else{
        alert(" ")
    }
}

// // Que 7 : Calculate factorial of a given number
// // Ans :
let number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log("The factorial of ${number} is 1");
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log("The factorial of ${number} is ${fact}");
}

// // Que 8 : Convert Tempreture given into Celsius to fehrenheit
// // Ans : 
let h=parseFloat(prompt('Input Tempreture in Celsius : '))
let h1=(h*1.8)+32;
console.log(h1)

// // Que 9 : Check if number is perfect square or not
// // Ans : 
let i = prompt('Enter the number: ');
let i1 = Math.sqrt(i);
console.log("The square root of ${i} is ${i1}");

// Que 10 : Find the largest element in an array.
// Ans :

// Que 11 : Determine the eligibility of a person to vote based on their age.
// Ans :

// Que 12 :Check if a given character is a vowel or consonant
// Ans : 

// Que 13 :Calculate the area of a triangle given base and height.
// Ans :
let m1 = prompt('Enter the base of a triangle: ');
let m2 = prompt('Enter the height of a triangle: ');
let m3 = (m1 * m2) / 2;
console.log("The area of the triangle is ${m3}");

// Que 14 : Check if a number is a palindrome.
// Ans :

// Que 15 : Determine if a year is a century year or not.
// Ans :

// Que 16 : Check if a number is divisible by another number.
// Ans :

// Que 17 : Sort three numbers in descending order
// Ans :

// Que 18 : Calculate the sum of digits of a number.
// Ans :
let r1 = parseInt(prompt('Enter a positive integer: '));
let r2 = 0;
for (let i = 1; i <= r1; i++) {
    r2 += i;
}
console.log('The sum of digits numbers:', r2);

// Que 19 :Check if a number is a strong number or not
//  Ans :

// Que 20 :Determine if a number is a perfect number or not.
//  Ans :

// Que 21 :Find the second largest element in an array.
//  Ans :

// Que 22 :Check if a number is a power of 2.
//  Ans :
function isPowerOf2(u) {
   return (u && (u & (u - 1)) === 0);
  }
  console.log(isPowerOf2(8))

// Que 23 :Calculate the profit or loss based on cost price and selling price
//  Ans :

// Que 24 :Determine the number of days in a month.
//  Ans :
let x=parseInt(prompt('enter month no.'))
switch(x){
    case 1:
        console.log('its january')
        break
    case 2:
        console.log('its february')
        break
    case 3:
        console.log('its march')
        break
    case 4:
        console.log('its april')
        break
    case 5:
        console.log('its may')
        break
    case 6:
        console.log('its june')
        break
    case 7:
        console.log('its july')
        break
    case 8:
        console.log('its august')
        break
    case 9:
        console.log('its september')
        break
    case 10:
        console.log('its october')
        break
    case 11:
        console.log('its november')
        break
    case 12:
        console.log('its december')
        break
    default:
        console.log('invalid month no.')
        break
    }

// Que 25 :Calculate the perimeter of a rectangle given length and width
//  Ans :
let y = (length, width) => 2 * (y1 + y2);
let y1 = 8;
let y2 = 5;
let y3 = y(y1, y2);
console.log("The perimeter of the rectangle is ${y3} units.");

// Que 26 : Find leap year
// Ans : 
let z=parseInt(prompt('Input year : '))
z%4==0 || z%400==0 || z%100==0 ? console.log("Leap Year") : console.log("Not a Leap Year")

// Que 27 : Find maximum of three numbers
// Ans : 
let aa1=parseInt(prompt('Input first value : '))
let aa2=parseInt(prompt('Input second value : '))
let aa3=parseInt(prompt('Input third value : '))
let aa4=parseInt(prompt('Input fourth value : '))
if(aa1>=aa2 && aa1>=aa3 && aa1>=aa4){
    alert('First value is maximum!')
} else if(aa2>=aa1 && aa2>=aa3 && aa2>=aa4){
    alert('Second value is maximum!')
}
else if(aa3>=aa1 && aa3>=aa2 && aa3>=aa4){
    alert('Third value is maximum')
} else if(aa4>=aa1 && aa4>=aa2 && aa4>=aa3){
    alert('Fourth value is maximum!')
}
else{
    alert('Invalid input numbers!')
}

// Que 28 : Find if a number is happy or not
// Ans : 
let bb=parseInt(prompt('Input a two digit number : '))
let bb_sum
for(let i=0;i<=bb;i++){
    let bb=bb%10;
    let bb2=bb/10;
    bb_sum=bb_sum +(bb1*bb1 + bb2*bb2);
    if(bb_sum==1){
        console.log("Happy number!")
    } else{
        console.log("Not a Happy number!")
    }
}

// Que 29 : Count number of digits in an input number
// Ans :
let cc=parseInt(prompt('Input a number : '))
let cc_count=0;
for(let i=0;i<cc;i++){
    cc=cc%10;
    count++;
    if(cc==0){
        console.log("Digits : ")
        console.log(cc_count)
        break;
    } else{
        console.log(" ")
    }
}

// Que 30 : Check if a number is automorphic or not
// Ans : 
let dd=parseInt(prompt('Input a two digit number : '))
if((dd*dd)/100==dd){
    console.log("Automorphic")
} else{
    console.log("Not Automorphic")
}

// Que 31 : Check if an input number is armstrong or not
// Ans : 
let ee=parseInt(prompt('Input a three digit number : '))
let ee1=ee/100;
let ee2=(ee/10)%10;
let ee3=ee%10;
let ee_ee=(ee1*ee1*ee1)+(ee1*ee2*ee2)+(ee3*ee3*ee3);
if(ee_ee==ee){
    console.log("Armstrong")
} else{
    console.log("Not Armstrong")
}

// Que 32 : Check if a number is neon number or not
// Ans : 
let ff=parseInt(prompt('Input a number less than three digits : '))
let ff_square=ff*ff;
let ff1=ff_square/1000;
let ff2=(ff_square/100)%10;
let ff3=(ff_square/10)%10;
let ff4=ff_square%10;
let ff_sum=ff1+ff2+ff3+ff4;
if(ff_sum==ff){
    console.log("Neon number")
} else{ 
    console.log("Not Neon number")
}

// Que 33 : Calculate sum of first n natural numbers
// Ans :
let gg=parseInt(prompt('Input value of n : '))
let gg_sum=(gg*(gg+1)*(2*gg+1))/6;
console.log("Sum : ")
console.log(gg_sum)

// Que 34 : Find smallest element in array
// Ans : 
let hh_arr=[5,3,1,2,4];
let hh_min=Math.min(...hh_arr)
console.log("Min value : ");
console.log(hh_min)

//  Que 35 : Find if number is buzz or not
// Ans : 
let ii=parseInt(prompt('Input a nummber : '))
if(ii%10==7 || ii%7==0){
    console.log("Buzz number")
} else{
    console.log("Not Buzz number")
}

// Que 36 : Check if number is spy number or not
// Ans : 
let jj=parseInt(prompt('Input a three digit number : '))

let jj1=jj/100;
let jj2=(jj/10)%10;
let jj3=jj%10;
let jj_sum=jj1+jj2+jj3;
let jj_product=jj1*jj2*jj3;
if(jj_sum==jj_product){
    console.log("Spy number")
} else{
    console.log("Not Spy number")
}

// Que 37 : Find if a number is harshad number or not
// Ans : 
let kk=parseInt(prompt('Input a three digit number : '))
let kk1=kk/100;
let kk2=(kk/10)%10;
let kk3=kk%10;
let kk_sum=kk1+kk2+kk3;
if(kk/kk_sum==0){
    console.log("Harshad number")
} else{
    console.log("Not Harshad number")
}

// Que 38 : Find average of numbers in an array
// Ans : 
let ll=[1,2,3,4,5];
let ll_sum=ll[0]+ll[1]+ll[2]+ll[3]+ll[4];
let ll_avg=ll_sum/5;
console.log("Average : ")
console.log(ll_avg)

// Que 39 : Check if number is duck number or not
// Ans : 
let=mm=parseInt(prompt('Input a three digit number : '))
let mm1=mm/100;
let mm2=(mm/10)%10;
let mm3=mm%10;
if(mm2==0 || mm3==0){
    console.log("Duck number")
} else if (mm1==0){
    console.log("Not Duck number")
} else{
    console.log("Not Duck number")
}

// Que 40 : Find compound interest , given - principal, rate and time
// Ans : 
// let nn1_principal=parseInt(prompt('Input Principal : '))
// let nn2_rate=parseInt(prompt('Input Rate : '))
// let nn3_time=parseInt(prompt('Input Time : '))

// let nn_CI