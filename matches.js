// write js code here corresponding to matches.html

var  arr= JSON.parse(localStorage.getItem("schedule"))
var favarr= JSON.parse(localStorage.getItem("favourites")) || [];

display(arr)


function display (){
    var city= document.querySelector("#filterVenue").value;
    console.log(city)
    var cityList= arr.filter(function (element){
        return element.venue == city;
    })
    console.log(cityList)
    display (arr)
    }

function display(arr){

 arr.forEach(function(element){

     var tr= document.createElement("tr")

     var td1= document.createElement("td")
     td1.innerText= element.number

     var td2= document.createElement("td")
     td2.innerText= element.teamA


     var td3= document.createElement("td")
     td3.innerText= element.teamB


     var td4= document.createElement("td")
     td4.innerText= element.date


     var td5= document.createElement("td")
     td5.innerText= element.venue

     var td6= document.createElement("td")
     td6.innerText= "Add as favourites"
     td6.style.color= "green";
     td6.style.cursor= "pointer"
     td6.addEventListener("click",function(){
         favorurites(element)
     });
    
     tr.append(td1,td2,td3,td4,td5,td6);
     document.querySelector("tbody").append(tr);

     function favorurites(element){
         favarr.push(element)
        localStorage.setItem("favourites",JSON.stringify(favarr));
         
     }


 })
     



}