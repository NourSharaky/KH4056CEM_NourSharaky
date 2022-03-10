function getName(){
  // pop up alerts
  alert("Welcome! This is a names function"); //function call

  // pop up to take input from user
  var name = prompt("Enter your name:");

  // print name in console
  console.log(name);

  // output formatting
  // concatenation method 1
  alert("Welcome " + name + " !");

  // concatenation method 2 (ES6) --> template literals
  // ~ TILDE: `` back-ticks
  alert(`Welcome ${name} again from ES6 !`);

  //  pop up confirmation
  confirm("Are you sure?");
}


// console.log(getName())
// getName();