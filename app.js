// setInterval(function(){
//    console.log("runnning...");
// },1000)

// var count=0;
// var interval;



// interval=setInterval(function(){
//     count++
//     console.log(count);
// },1000)


// setTimeout(function(){
//     clearInterval(interval);
// },5000)



var hour=0;
var min=0;
var sec=0;
var msec=0;
var hourHeading=document.getElementById("hour");
hourHeading.innerHTML+=" H"
var minHeading=document.getElementById("min");
minHeading.innerHTML+=" min";
var secHeading=document.getElementById("sec");
secHeading.innerHTML+=" s";
var msecHeading=document.getElementById("msec");
msecHeading.innerHTML+=" ms";
var interval;
var check=true;

function timer(){
    msec++;
    msecHeading.innerHTML = msec+" ms";
    if(msec>=100)
    {
        sec++;
        secHeading.innerHTML = sec+" s";
        msec=0;
    }
    if(sec>=60)
    {
        min++;
        minHeading.innerHTML=min+" min";
        sec=0;
    }
    if(min>=60)
    {
        hour++;
        hourHeading.innerHTML=hour+" H";
        min=0;
    }
}

var task;

function lap()
{
    task=prompt("Enter the task for which you want the time to stop?");
    if(task=="")
    {
        task="Not defined";
    }
}


var list = document.getElementById("list");
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var itemsByTagName = document.getElementsByTagName("li");
  list.innerHTML += " Task: " + task + " ," + document.getElementById("container").innerText+'<br>';
});

function stop()
{
    clearInterval(interval);
    check=true;
    console.log(document.getElementById("container").innerText);
}

function reset()
{
    clearInterval(interval);
    
    min=0;
    minHeading.innerHTML=0;
    sec=0;
    secHeading.innerHTML=0;
    msec=0;
    msecHeading.innerHTML=0;
    check=true;

}

function start(){

    interval = setInterval(timer,10);   
    check=false;
}



function checkCorrect()
{
    if(check==true)
    {
        start();
    }
    else
    {
        alert("Wrong Input Press stop or reset to start again!");
    }
}

function HideShow() {
    var x = document.getElementById("history");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }







//   dsklfhsdklfhsdjklfhsdjklfhsdjklafhsjkl
var div = document.getElementById('list'); 
  
function GFG_Fun() { 
    div.parentNode.removeChild(list); 
} 
//  sdafklsdjfikjsdklfjdskfhsdjkafhsdjkfhsjdk