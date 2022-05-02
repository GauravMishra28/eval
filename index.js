// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",addMatch);
var  arr= JSON.parse(localStorage.getItem("schedule")) || [];

function addMatch(){

    event.preventDefault();

    var obj={
        number: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value,
    }
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("schedule",JSON.stringify(arr));
}
