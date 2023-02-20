
$(document).ready(function(){

	$("select").change(function(){
	    $("img").hide();
	    $("." + $(this).val()).show();
	    });
});





filterSelection("allc")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


filterSelection2("allc")
function filterSelection2(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show2");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show2");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


$(document).ready(function(){
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
    $("img").hide();
	$("." + $(this).val()).show();
  });
}

});



$(document).ready(function(){
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer2");
var btns = btnContainer.getElementsByClassName("btn2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active3");
    current[0].className = current[0].className.replace(" active3", "");
    this.className += " active3";
    $("img").hide();
    $("." + $(this).val()).show();
  });
}

});

$(document).ready(function(){
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer3");
var btns = btnContainer.getElementsByClassName("btn3");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active4");
    current[0].className = current[0].className.replace(" active4", "");
    this.className += " active4";
    $("img").hide();
    $("." + $(this).val()).show();
  });
}

});



