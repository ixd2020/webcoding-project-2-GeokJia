
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction2() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav2") {
    x.className += " responsive";
  } else {
    x.className = "topnav2";
  }
}

// const best = () =>{
//   $('#section1body').click(function(){
//                            window.location.href ='/best.html'
//                            })
// }

// best()