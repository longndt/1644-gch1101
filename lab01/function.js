//1. hàm có tham số và có return giá trị
function sum (a, b) {
   return a+b
}

//2. hàm có tham số và không return giá trị
function multiplication (a, b) {
   console.log (a * b)
}

//3. hàm không có tham số và có return giá trị
function greenwich () {
   return 'Greenwich Vietnam'
}

//4. hàm không có tham số và không return giá trị
function sayHello () {
   console.log ("Hello Vietnam !")
}

sayHello()
console.log ("Hello " + greenwich())

c = sum(3, 5)
console.log (c)
multiplication(4, 6)