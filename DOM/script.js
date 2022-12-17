// ###index.html
// function dispContent() {
//   var parList = document.getElementsByTagName("p");
//   var headList = document.getElementsByTagName("h3");
//   console.log(parList);
//   var paraTitle = document.getElementById("paraTitle");
//   var paraContent = document.getElementById("paraContent");

//   console.log(parList);
//   for (i = 0; i < parList.length; ++i) {
//     var headDiv = document.createElement("div");
//     var paraDiv = document.createElement("div");

//     headDiv.innerText = headList[i].innerText;
//     paraDiv.innerText = parList[i].innerText;

//     paraTitle.appendChild(headDiv);
//     paraContent.appendChild(paraDiv);
//   }
// }

// ###index2.html

// ####Mouse Over title
// var title = document.getElementById("title");

// title.onmouseover = () => {
//   title.style.textShadow = "2px 2px black";
// };

// title.onmouseout = () => {
//   title.style.textShadow = "0px 0px black";
// };

// ##Change color on clicking
// var body = document.body;
// function change1() {
//   body.style.backgroundColor = "hsl(31, 77%, 52%)";
// }
// function change2() {
//   body.style.backgroundColor = "hsl(184, 100%, 22%)";
// }
// function change3() {
//   body.style.backgroundColor = "hsl(179, 100%, 13%)";
// }

// var divList = document.getElementsByTagName("div");
// var liList = document.getElementsByTagName("li");
// console.log(divList);
// console.log(liList.item(0));
// var n = liList.length;
// for (i = 0; i < n; ++i) {
// console.log(liList.item(i).removeChild(liList.item(i).firstElementChild));
// liList.item(i).firstElementChild.remove();
// n = liList.length;
// i = 0;
// i--;
//   console.log(divList[i]);
// liList[i].onmouseover = () => {
//   // divList[i].style.backgroundColor = "red";
//   //   liList[i].removeChild(divList[i]);
//   // liList[i].removeChild(liList[i].firstElementChild);
//   console.log(liList.namedItem("desktop"));
// };
//   liList[i].removeChild(liList[i].firstElementChild);
// liList.item(i).firstElementChild.onmouseover
// var mNode = liList.item(i);
// liList.item(i).onmouseover = () => {
//   console.log(liList.item(i));
// liList.item(i).removeChild(liList.item(i).firstElementChild);
// };
// }

function displace(data) {
  // console.log(data);

  var newNode = document.createElement("img");
  var divElem = data.firstElementChild;
  var imgName = divElem.getAttribute("id");
  // console.log(imgName + ".png");
  // data.removeChild(data.firstElementChild);
  newNode.setAttribute("src", "./images/" + imgName + ".png");
  newNode.setAttribute("id", imgName);
  data.removeChild(divElem);
  data.appendChild(newNode);
}

function withdraw(data) {
  console.log(data);
  var newNode = document.createElement("div");
  var imgElem = data.firstElementChild;
  console.log(imgElem);
  var divId = imgElem.getAttribute("id");
  console.log(divId);
  newNode.setAttribute("id", divId);
  console.log(newNode);
  // newNode.setAttribute("class",)
  // data.removeChild(imgElem);
  data.appendChild(newNode);
}
