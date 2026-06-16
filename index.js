
//var a=10
//var b=27.2
//var c="hello"
//var d=false

//console.log(a+" "+b+" "+c+" "+d)

var a=10
var b="10"
if(a==b) {
    console.log("equals");
} 
else {
    console.log("not equals");
}

if(a===b) {
    console.log("equals")
}
 else {
    console.log("not equals")
}

console.log(2*3)
console.log(2**3)


for(var i=0;i<10;i++)
{
    console.log(i+" ")
}

var n=2000
if((n % 4 == 0 && n % 100 !=0)|| (n % 400 ==0)) {
    console.log("leap year")
}
else
{
    console.log("Not a leap year")
}
 var data=[10,34.242,"hello",true]
 for(let i = 0;i < data.length; i++) {
    console.log(data[i]);
 } 

//--------------
 data.push(40)
 console.log(data)
 data.pop(10)
 console.log(data)
 data.shift()
 console.log(data)
 data.unshift(1)
console.log(data)

//
var data1=[10,20,30]
var data2=[40,50,60]
var newData=[100, ...data1, 200, ...data2]
console.log(newData);

//JSON
var userData = [
    {
        id: 1,
        name: "riya",
        age: 21,
        techStack: ["devops", "cloud", "fulstack"]
    },
    {
        id: 2,
        name: "priya",
        age:22,
        techStack: ["html"]
    }
];
console.log(userData[0],name);

//Functions

function add(a, b) {
    console.log(a - b);
}
const myFun0 = function (a,b) {
    //console.log(a + b);
    return a+b;
}
console.log(myFun0(22,1))


const myfun1 = (a, b) => {
    return a + b
}
console.log(myfun1(22,2))

//bulletFunction
const myFun2 = (a, b) => a + b
console.log(myFun2(22,1))
//add(3,5)

