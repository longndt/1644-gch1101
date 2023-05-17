console.log ('Greenwich Vietnam.\nSố 2 Phạm Văn Bạch - Cầu Giấy - Hà Nội')
console.log (2023)
 
var a = 3
var b = 5
c = a + b
console.log ("c = " + c)
if (a >= b) 
  console.log (a + " >= " + b)
else
  console.log (a + "<" + b)

grade = 3.5
if (grade >= 9.0 && grade <= 10) {
   console.log("Distinction")
} else if (grade >= 7.0 && grade <9.0) {
  console.log ("Merit")
} else if (grade >= 5.0) {
  console.log("Pass")
} else {
  console.log("Fail")
  console.log("Good luck next time !")
}

x = 5
y = 5
if (x == y) 
  console.log("x = y")
else 
  console.log("x != y")

a = 3
//postfix operator
b = a++  // b=a=3 => a++=a+1=4
//prefix operator
c = ++a  // ++a=a+1=5 => c=a=5

console.log("a = " + a)   //5
console.log("b = " + b)   //3
console.log("c = " + c)   //5
  
a = 10
a = a + 1
a += 1 //shorthand

speed = 0
switch (speed) {
  case 0:
    console.log("Fan is stopped")
    break
  case 1:
    console.log("Fan speed is 1")
      break
  case 2:
    console.log("Fan speed is 2")
      break
  case 3:
     console.log("Fan speed is 3")
      break
  default: 
     console.log("Invalid speed")
      break
}