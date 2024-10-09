 alert("Welcome to ani JS world ")
 let name1=prompt("enter ur name");
document.write(name1);
 
// // console.log(123);
// // console.log("hello")
// // console.log(true)
// // console.log([1,2,3,4])
// // console.log({a:1,b:2,c:3,d:4});

// // var name="anil";
// // console.log(name)//camelcase

// // var first_name="rahul";
// // console.log(first_name)//underscore

// // var Firstname="daya";
// // console.log(Firstname)//pascal case
// // //console.log(prompt("first name"))

// // let firstname="ani"
// // console.log(firstname)

// // // let firstname="guru"    // Variables defined with let can not be redeclared
// // // console.log(firstname)

// // const person={
// //     name1:"navi",
// // }

// // person.name1="pavi";
// // console.log(person);


// //----------------------Data type-----------------

// const ss="javascript"; //string type

// console.log(ss);
// console.log(typeof ss) // it is used to get out as which data type

// const nm=100;
// console.log(nm);
// console.log(typeof nm);


// const tr=true;// boolean
// console.log(tr);
// console.log(typeof tr);


// const nl=null;

// console.log( nl); 

// //const ud; for this data type declared variable is must be let not const 
// let ud; // we will get output as undefined
// console.log(ud);

// //----------------------Data type conversion-----------------

// //---conversion to string------

// let va=String(10); //to convert num into String


// va = String(true); //boolean into string


// va=String([1,2,3,4]) //array to string

// va=String (new Date()); // date to string


// console.log(va);
// console.log(typeof va); 
// console.log(va.length)



// //----------conversion to numbert------------------

// let na;

// na=Number("10");

// na=Number(true);

// na=Number(false);

// console.log(na);
// console.log(typeof na); 
// console.log(na.length)

// //------------math objects------------------

// vv=Math.PI;
// vv=Math.ceil(2.6);
// vv=Math.floor(2.1)
// vv=Math.abs(-8)
// vv=Math.random();// it will genetare the code in decimal values,in between the 0-1
// vv=Math.random()*9999;// it will generate code in beetween 1-9999 in decimal 
vv=Math.floor(Math.random()*9999);


console.log(vv)

// //----------------string object-------------------

// const first_name="dinga";
// const last_name="ringa";

// let vaq;

// vaq=first_name+last_name;
// vaq=first_name + " " + last_name;


const name="anil v";
const age=23;
const city="Doddaballapur";
const job="Web developer";

let html;

// html= '<ul><li>Name='+ name +'</li><li>Age='+age+'</li><li>City='+city+'</li><li>Job='+job+'</li></ul>';

// document.body.innerHTML=html;


//by doing dis above code is very difficult to do insted of this we use 
//template literals

html=`
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>city:${city}</li>
<li>Job:${job}</li>
</ul>
`;

document.body.innerHTML=html;

  
const a=[1,2,3,4];
//another way to write array code

const number= new Array(23,34,56,78,12); 
const mixed=new Array("bengaluru","mangaluru","madikeri","mysuru")
console.log(mixed)

//chek if its an array
val=Array.isArray(number);

//get a single value in array
val = number[4];

console.log(val);

number.push(90);
number.push(293);
number.pop();
console.log(number);
