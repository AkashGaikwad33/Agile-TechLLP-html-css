var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 500;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
  var textLength = myText.value.length;
  result.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "#ff2851";
    result.style.color = "#ff2851";
  } else {
    myText.style.borderColor = "#b2b2b2";
    result.style.color = "#737373";
  }
});

// See More And see less

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "see more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "see less";
    moreText.style.display = "inline";
  }
}

function myFun() {
  var use = document.getElementById("use");
  var projectText = document.getElementById("project");
  var btnText = document.getElementById("myButton2");

  if (dots.style.display === "none") {
    use.style.display = "inline";
    btnText.innerHTML = "see more";
    projectText.style.display = "none";
  } else {
    use.style.display = "none";
    btnText.innerHTML = "see less";
    projectText.style.display = "inline";
  }
}
