function test(){
    if(3>2){
        var x=35;
        console.log("Value of X is "+x);
    }
    console.log("Out Of Box"+ x);
}
test()




// treaditional way of create function 
 function s(x){
    return x*x;
 }
  //Arraw Function
 const sq = (x)=>x*x;

 console.log(s(3));
 console.log(sq(4));

//Ex:-
 let a=[100,200,4000];
a.forEach(e=>console.log(e));

// Multi line String 
let addsress=`ganesh gawali home
nagpur , 
vidarbha,
Maharashtra
India

`;
console.log(addsress);


// Default Parameater


const sum=(h,p)=>h+p;
console.log(sum());
console.log(sum(3,5));
//console.log(sum());


// TEMPLATE LITRALS

let q=10;
let q1=9;
//Old way
console.log("q is a "+q);
// new Way
console.log(`q is a ${q}`);
 //Ex
console.log(`q is a ${q} and q1 is ${q1} is sum ${q+q1}`);



//Destructuring Assignment

//Old Way
let mya=[20,53];
let s1=mya[0];
let s2=mya[1];

console.log(s1);
console.log(s2);

//New Way

let mya2=[20,53];
let [s3,s4]=mya2;
console.log(s3);
console.log(s4);

//Example2
let ob={
    name:'java',
    dbname:'mysql'
}
let {name,dbname}=ob;
console.log(name);
console.log(dbname);

//Example 3

let myaa=[21,35,78,97];
let [e1,e2,...rest]=myaa;
console.log(e1);
console.log(e2);
console.log(rest);



//pop method

const ft = ["88", "343", "7", "4"];
document.getElementById("pp1").innerHTML = ft;
ft.pop();
document.getElementById("pp2").innerHTML = ft;





