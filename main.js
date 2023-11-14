var dest= new Date("nov 15,2023 00:00:00").getTime()

var x= setInterval(function(){
    
    var date= new Date().getTime()
    let diff= dest-date

    var days=Math.floor(diff/(1000*60*60*24))
    var hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    var minutes=Math.floor((diff%(1000*60*60))/(1000*60))
    var seconds=Math.floor((diff%(1000*60))/(1000))
    if (days<10) {
        days="0"+days
    }
    if (hours<10) {
        hours="0"+hours
    }
    if (minutes<10) {
        minutes="0"+minutes
    }
    if (seconds<10) {
        seconds="0"+seconds
    }
    document.getElementById("p1").innerHTML=days
    document.getElementById("p2").innerHTML=hours
    document.getElementById("p3").innerHTML=minutes
    document.getElementById("p4").innerHTML=seconds

},1000);










const revealButtons = document.querySelectorAll(".reveal")
const revealButtonsArray = Array.from(revealButtons)
const revealButtonSibling = revealButtonsArray[0].previousElementSibling

revealButtonsArray.forEach( () => {
revealButtonsArray[0].addEventListener("click", () => {
 if(revealButtonSibling.classList.contains("clamp-two")) {
      revealButtonSibling.classList.remove("clamp-two");
      revealButtonsArray.textContent = "Show less"
    } else {
      revealButtonSibling.classList.add("clamp-two");
      revealButtonsArray.textContent = "Show more"
    }
  })
})

new ShowMore('.text');