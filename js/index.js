// print Hello
// document.write("Hello Utkarsh <br/>")

// Display pattern
// for(i=1;i<5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.write(j+" ")
//     }
//     document.write("<br/>")
// }

// Print Odd or even
// var n = 67;
// if (n % 2 == 0) document.write(`${n} is even`);
// else document.write(`${n} is odd`);

// document.write(factorial(5))

// var ans = 0;

// Calculate Factorial
// function factorial() {
//   n= document.getElementById("num").value
//   k = 1;
//   while (n > 0) {
//     k *= n--;
//     // n--;
//   }
//   document.getElementById("par").innerHTML=`Factorial : ${k}`;

  
// }


// Calculate Power
// function calcPower(a,b)
// {
//   var ans=1;
//   for(i=0;i<b;i++)
//   {
//     ans*=a;
//   }
//   document.getElementById("par").innerHTML=`${a}<sup>${b}</sup> = ${ans}`
// }

// Genrate Factorial table
function factTable()
{
  var str=""
  var ans=1;
  str+="<div class='row'>"
  str+="<div>Number</div>"
  str+="<div>Factorial</div>"
  str+="</div>"
  for(i=1;i<6;++i)
  {
    str+="<div class='row'>"
    str+=`<div>${i}</div>`
    ans*=i;
    str+=`<div>${ans}</div>`
    str+="</div>"
  }
  document.getElementById("table").innerHTML=str
}

// Check Palindrome
function checkPal(num1)
{
  var a=[];
 
  var num=num1;
  while(num>0)
  {
    var k=(num%10);
    a.push(k);
    num=Math.trunc(num/10);
    // console.log(`${k} ${num}`)
  }

  n=a.length
  ans=true;
  for(i=0;i<n/2;++i)
  {
    if(a[i]!=a[n-i-1])
      ans=false;
  }

  str=ans? "is Palindrome" :"is not Palindrome"
  document.getElementById("par").innerHTML=`${num1} ${str}`
 
}

// Check prime
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

  var str= ans ? `${n} is Prime` : `${n} is not Prime`
  document.getElementById("par").innerHTML=str
}

// sum of Digits
function sod(n)
{
  var ans=0;
  while(n>0)
  {
    k=n%10
    ans+=k;
    n=Math.trunc(n/10)
  }
  document.getElementById("par").innerHTML=`Sum of digits :${ans}`
}