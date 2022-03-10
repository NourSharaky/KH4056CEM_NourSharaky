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

// illustration - change text
function changeH1(){
  var h1 = document.getElementById("ill");
  h1.innerText = "some text";
}
changeH1();

// to do - change text
function changeH1a(){
  var h1a = document.getElementById("change-h1");
  h1a.innerText = "Hello World";
}
changeH1a();

// illustration - italic
function italic(){
  var i = document.getElementById("ill2");
  old = i.innerText;
  i.innerHTML = `<i>${old}</i>`;
}
italic();

// to do - underline
function underline(){
  var u = document.getElementById("change-html-h1");
  u.style = "text-decoration: underline;";
}
underline();

// illustration - styles inline
function styl(){
  var t = document.getElementById("ill3");
  // t.style = "color: red; font-size: 40px; text-decoration-line: underline ; text-decoration-style: wavy;"
  t.style.color= "red";
  t.style.fontSize= "40px";
  t.style.textDecoration= "underline wavy green";
}
styl();

// to do - styles inline
function sty(){
  var t = document.getElementById("change-style-h1");
  t.style = "color: magenta; background-color: #ddd; border:1px solid skyblue;";
}
sty()
