imgArray = ["a", "b", "c", "d", "e", "f"];
currIndex = 0;
path = "./images/";
ext = ".jpg";
const container = document.getElementById("container");
container.style = ` background-image:url(${path + imgArray[currIndex] + ext}) `;

function next() {
  currIndex++;
  if (currIndex == imgArray.length - 1) currIndex = 0;

  console.log(currIndex);
  container.style = ` background-image:url(${
    path + imgArray[currIndex] + ext
  })`;
}

function prev() {
  currIndex--;
  if (currIndex < 0) currIndex = imgArray.length - 1;
  console.log(currIndex);
  container.style = ` background-image:url(${
    path + imgArray[currIndex] + ext
  })`;
}

function autoSlide() {
  setInterval(next, 1000);
}
