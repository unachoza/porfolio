console.log('working!')

var projects = document.querySelector("#pp")
var aboutMe = document.querySelector("#am")
var aboutMe = document.querySelector("#c")

function scrollWin(x, y) {
    window.scrollBy(x, y);
    // if (x.matches){
    //     window.scrollBy(x, y);
    // }
}
function scrollP(){
    console.log('im clicked')
    document.querySelector("#pp").style.color = "blue"
    document.querySelector("#pp").scrollTo(("#projects"), 1000)


// timedText()
// function timedText() {
   
//     setTimeout(myTimeout1, 2000) 
    
//   }
// function myTimeout1() {
//     console.log('timing')
//     document.getElementById("second-line").innerHTML = "Welcome to Arianna Choza's Portfolio";
//   }
// setTimeout(function(){
//     $('#message2').html("second");
// },3000)

// setTimeout(typing, 3000)

// function typing(){
//     document.selectElementById("Hello World!") */
