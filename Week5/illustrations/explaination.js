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
