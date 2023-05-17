//1. khai báo biến bằng "var" (áp dụng cho toàn bộ file hoặc toàn bộ class)
var a = 3  //int
var b = 5
var c = a + b
var d = a * b
console.log("a = " + a)
console.log("b = " + b)
console.log("c = a + b = " + c)
console.log("d = a * b = " + d)
console.log("a % b = " + (a%b))
var a = 3.0  //double
console.log("a = " + a)
var a = "Laptop" //string
console.log (a)
var a = 'o'  //char
console.log (a)
var a = true //boolean
console.log (a)
//2. khai báo biến số (có thể thay đổi được) bằng "let" (chỉ áp dụng trong 1 scope nhất định)
let city = "Hanoi"
let country = "Vietnam"
console.log(city + " is the capital of " + country)
function demo() {
   let a = 5;
   console.log(a)
}

//3. khai báo hằng số (giá trị không thay đổi) bằng "const"
const pi = 3.14  //float
console.log("Pi = " + pi)