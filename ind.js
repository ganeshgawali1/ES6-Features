//toString 
const sk = [4, 3, 2, 1];
document.getElementById("tostring").innerHTML = sk.toString();

//join

const j = ["Ganesh", "rimjhim", "raghav", "raj"];
document.getElementById("join").innerHTML = j.join(" / ");


//Splice

const spli = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("splice").innerHTML = spli;

spli.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("splice2").innerHTML = spli;

//slice
// ex1
const fb = [1,2,3,4,5,6];
const ct = fb.slice(1,3);
document.getElementById("slice").innerHTML = fb + "<br><br>" + ct;

//ex 2 

const fbt = ["sapana", "swami", "ritesh", "sushant", "Manoj"];
const ctt = fbt.slice(3);
document.getElementById("slice2").innerHTML = fbt + "<br><br>" + ctt;





//promises

var data=new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve("new state")
    },2000)

})
data.then(function(val){
    console.warn("set");
})



