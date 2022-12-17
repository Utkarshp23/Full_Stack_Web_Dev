
var isArrayCreated=false;
var num = [];

function enterArray() {
  

  n = prompt("Enter no. of elements");
  for (i = 0; i < n; ++i) {
    num[i] =parseInt( prompt(`Enter ${i + 1}th element`));
  }
  // console.log(num);

  display()
  document.getElementById("btn").style.display="none"
  // document.getElementById("array").innerHTML = str;
  isArrayCreated=true;

  // const button= document.createElement("button")
  // button.innerHTML="Sort"
  // document.body.appendChild(button)
  // document.body.

  var s=""
  s+="<button onclick='sort()'>Sort</button>"
  s+="<button onclick='findMin()'>FindMin</button>"
  s+="<button onclick='findMax()'>FindMax</button>"
  s+="<button onclick='sum()'>sum</button>"
  s+="<button onclick='avg()'>avg</button>"
  s+="<button onclick='isAllEven()'>Check all Even</button>"
  s+="<button onclick='isSomeOdd()'>Check some odd</button>"
  s+="<button onclick='isAllPrime()'>Check all Prime</button>"
  s+="<button onclick='splitOddEven()'>Spit Odd Even</button>"
  document.getElementById("buttons").innerHTML=s;
}

function sort()
{
  // console.log(num)
  num.sort((a,b)=>{
    return a-b
  })
  display()
  // console.log(num)
}


function display()
{
  var str = "";
  for (i in num) {
    str += "<div class='box'>";
    str += num[i];
    str += "</div>";
  }
  
  document.getElementById("array").innerHTML = str;
}

function findMin()
{
  var k=num.reduce((acc,v)=> acc<v?acc:v)

  document.getElementById("output").innerHTML=`Min element is ${k}`
}

function findMax()
{
  var m=num.reduce((acc,v)=> acc>v? acc: v)
  document.getElementById("output").innerHTML=`Max element is ${m}`
}

function sum()
{
  var k=num.reduce((acc,v)=> acc+v)
  document.getElementById("output").innerHTML=`sum of elements is ${k}`
}

function avg()
{
  var k=num.reduce((acc,v,i,num)=> {
    console.log(acc+" "+i+" "+v+" ")
    if(i==num.length-1)
    {  acc=acc+v;
       acc=parseInt(acc/num.length)}
    else
      acc=acc+v;

    return acc
      // acc=parseInt(((acc*i)+v)/(i+1))
  })
  document.getElementById("output").innerHTML=`Avg of elements is ${k}`
}

function isAllEven()
{
  document.getElementById("output").innerHTML= `All elements are ${num.every((v)=>v%2==0)?'even':'not even'}`

}

function isAllPrime()
{
  document.getElementById("output").innerHTML= `All elements are ${
  num.every((v)=>checkPrime(v))?'Prime':'not Prime'}`
}

function isSomeOdd()
{
  document.getElementById("output").innerHTML= `Some elements are ${num.some((v)=>v%2==1)?'Odd':'not odd'}`
}

function splitOddEven()
{
  var z=""
  var even=num.filter(v=>v%2==0)
  var odd=num.filter(v=>v%2==1)

  z+="<div>Even Array"
  for (i in even) {
    z += "<div class='box'>";
    z += even[i];
    z += "</div>";
  }
  z+="</div>"

  z+="<div>Odd Array"
  for (i in odd) {
    z += "<div class='box'>";
    z += odd[i];
    z += "</div>";
  }
  z+="</div>"

  document.getElementById("output").innerHTML=z
}

function checkPrime(n)
{
  var ans=true;
  if(n>1)
  for(i=2;i<=Math.sqrt(n);++i)
  {
    if(n%i==0)
     ans=false
  }
  else{
    ans=false;
  }

  return ans;
  // var str= ans ? `${n} is Prime` : `${n} is not Prime`
  // document.getElementById("par").innerHTML=str
}