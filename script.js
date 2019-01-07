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
}
