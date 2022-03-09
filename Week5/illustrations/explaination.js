// declaration vs definition vs assignment vs reassignment vs initialization

var x; // declaration + initialization (undefined)

var y = 10; // definition

x = 100; // assignment

x = 100; // reassignment


// 1. function definition

// A. named functions
  // parameters
function myfun(a,b){
  return a + b
  // boddy
}

// B. Anonymous function: nameless Functions
  // store the function body in a var (alias)
var myfunc = function(){
}


// 2. function call
  // arguements
myfun(10,20);
myfunc();


// -----------------Debugging-----------------

// terminal? console/REPL/SHELL
// print? console.log()

// -----------------data types / casting -----------------
var x = 10;
x=[10,20,20];
x= {
  name: "ahmed",
  age: 26
}
console.log(x);
// array
console.log(x[1]);
// key value pair (dictionary)
// dot notation
console.log(x.name);
// bracket notation
console.log(x["name"]);
console.log(typeof(x));



x="10";
// change type into number
number(x);
parseInt("1000");
// NaN - not a number
x= Number("Sdfg")
// output: NaN
isNaN(Number("Sdfg"))
// output: true
